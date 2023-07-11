import { Request, Response } from "express";

import Stripe from "stripe";
import { dal_Purchase_Write_NewPurchase } from "../../../purchase/dals";
import { config_Stripe } from "../../../../config";


export const controller_Stripe_Create_CheckoutSession = async (
  req: Request,
  res: Response
) => {

  let id_Tier:string = "";
  let priceId_Tier:string = ""

  const stripe = new Stripe(config_Stripe.key_Secret, {
    apiVersion: "2022-11-15",
  });

  const session: any = await stripe.checkout.sessions.create({
    success_url: `${res.locals.origin}/payment-handle/{CHECKOUT_SESSION_ID}`,
    cancel_url: `${res.locals.origin}/payment-cancel/{CHECKOUT_SESSION_ID}`,
    line_items: [{ price: priceId_Tier, quantity: 1 }],
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

  const purchase = await dal_Purchase_Write_NewPurchase(
    id_Tier,
    session.id,
    session.currency,
    session.amount_total / 100,
    res.locals.id_Account
  );

  if (!purchase.success) {
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
