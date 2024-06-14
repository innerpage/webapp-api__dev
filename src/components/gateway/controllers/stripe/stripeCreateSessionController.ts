import { Request, Response } from "express";

import Stripe from "stripe";
import { writeNewPurchase } from "../../../purchase/dals";
import { Var } from "../../../../global/var";

export const stripeCreateSessionController = async (
  req: Request,
  res: Response
) => {
  let tierId: string = "";
  let priceId: string = "";

  const stripe = new Stripe(Var.stripe.key.secret, {
    apiVersion: "2022-11-15",
  });

  const session: any = await stripe.checkout.sessions.create({
    success_url: `${res.locals.origin}/payment-handle/{CHECKOUT_sessionId}`,
    cancel_url: `${res.locals.origin}/payment-cancel/{CHECKOUT_sessionId}`,
    line_items: [{ price: priceId, quantity: 1 }],
    mode: "payment",
    currency: "USD",
  });

  if (!session.id) {
    console.log(
      `${Var.app.emoji.failure} Could not create Stripe checkout session`
    );
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Could not create Stripe checkout session`,
    });
  }

  const newPurchase = await writeNewPurchase(
    tierId,
    session.id,
    session.currency,
    session.amount / 100,
    res.locals.accountId
  );

  if (!newPurchase.success) {
    console.log(`${Var.app.emoji.failure} Could not save purchase`);
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Could not save purchase`,
    });
  }

  return res.status(200).json({
    success: true,
    message: `${Var.app.emoji.success} Stripe checkout session created`,
    payload: session.id,
  });
};
