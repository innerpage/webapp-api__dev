import { Request, Response } from "express";

import { dal_Publisher_Read_By_Origin } from "../../../publisher/dals/";
import { dal_Gateway_Read_Backend } from "../../dals";

import Stripe from "stripe";

interface LooseObj {
  [key: string]: any;
}

export const controller_Stripe_CheckoutSession_Create = async (
  req: Request,
  res: Response
) => {
  const publisher: any = await dal_Publisher_Read_By_Origin(res.locals.origin);
  if (!publisher) {
    console.log("❌ Could not find publisher");
    return res.status(400).json({
      success: false,
      message: "❌ Could not find publisher",
    });
  }

  const gateway: any = await dal_Gateway_Read_Backend(publisher.id);
  if (!gateway) {
    console.log("❌ Could not fetch gateway");
    return res.status(400).json({
      success: false,
      message: "❌ Could not fetch gateway",
    });
  }

  const stripe = new Stripe(gateway.secret_key, {
    apiVersion: "2022-11-15",
  });

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "inr",
            unit_amount: 1000,
            product_data: {
              name: "T-shirt",
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${res.locals.origin}/payment-handle/{CHECKOUT_SESSION_ID}`,
      cancel_url: `${res.locals.origin}/payment-cancel/{CHECKOUT_SESSION_ID}`,
      payment_method_types: ["card"],
      mode: "payment",
    });

  return res.status(200).json({
    success: true,
    message: "Stripe session created",
    payload: checkoutSession.id,
  });
};
