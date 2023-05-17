import { Request, Response } from "express";

import { dal_Publisher_Read_By_Origin } from "../../../publisher/dals/";
import { dal_Document_Read_By_DocumentId } from "../../../document/dals";
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

  const document: any = await dal_Document_Read_By_DocumentId(
    res.locals.id_Document
  );
  if (!document) {
    console.log("❌ Could not fetch document");
    return res.status(400).json({
      success: false,
      message: "❌ Could not fetch document",
    });
  }

  const stripe = new Stripe(gateway.secret_key, {
    apiVersion: "2022-11-15",
  });

  let price: number = 0;
  if (res.locals.currency === "inr") {
    price = document.dataValues.price_inr;
  } else if (res.locals.currency === "usd") {
    price = document.dataValues.price_usd;
  }

  console.log(`currency: ${res.locals.currency}`);
  console.log(`price: ${price}`);

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: res.locals.currency,
            unit_amount: price * 100,
            product_data: {
              name: document.dataValues.title,
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
