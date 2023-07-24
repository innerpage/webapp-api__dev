import { Request, Response } from "express";

import Stripe from "stripe";
import { writeNewPurchase } from "../../../purchase/dals";
import { StripeConfig } from "../../../../config";

export const stripeCreateSessionController = async (
  req: Request,
  res: Response
) => {
  let tierId: string = "";
  let priceId: string = "";

  const stripe = new Stripe(StripeConfig.secretKey, {
    apiVersion: "2022-11-15",
  });

  const session: any = await stripe.checkout.sessions.create({
    success_url: `${res.locals.origin}/payment-handle/{CHECKOUT_SESSION_ID}`,
    cancel_url: `${res.locals.origin}/payment-cancel/{CHECKOUT_SESSION_ID}`,
    line_items: [{ price: priceId, quantity: 1 }],
    mode: "payment",
    currency: "USD",
  });

  if (!session.id) {
    console.log("❌ Could not create Stripe checkout session");
    return res.status(400).json({
      success: false,
      message: "❌ Could not create Stripe checkout session",
    });
  }

  const newPurchaseObject = await writeNewPurchase(
    tierId,
    session.id,
    session.currency,
    session.amount / 100,
    res.locals.accountId
  );

  if (!newPurchaseObject.success) {
    console.log("❌ Could not save purchase");
    return res.status(400).json({
      success: false,
      message: "❌ Could not save purchase",
    });
  }

  return res.status(200).json({
    success: true,
    message: "✅ Stripe checkout session created",
    payload: session.id,
  });
};
