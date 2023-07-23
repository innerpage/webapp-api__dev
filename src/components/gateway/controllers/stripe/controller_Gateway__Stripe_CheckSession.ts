import { Request, Response } from "express";

import Stripe from "stripe";
import { dal_Purchase_Write_Status_Purchase } from "../../../purchase/dals";
import { StripeConfig } from "../../../../config";

export const controller_Gateway_Stripe_CheckSession = async (
  req: Request,
  res: Response
) => {
  const stripe = new Stripe(StripeConfig.secretKey, {
    apiVersion: "2022-11-15",
  });

  await stripe.checkout.sessions
    .retrieve(res.locals.id_Session)
    .then(async (session) => {
      if (session.payment_status != "paid") {
        return res.status(200).json({
          success: false,
          message: "❌ Payment unsuccessful",
          payload: {},
        });
      }

      const updated_Purchase = await dal_Purchase_Write_Status_Purchase(
        res.locals.id_Session
      );

      if (!updated_Purchase.success) {
        return res.status(200).json({
          success: false,
          message: "❌ Payment status update failed",
          payload: {},
        });
      }

      return res.status(200).json({
        success: true,
        message: "✅ Payment successful",
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        success: false,
        message: "❌ Could not check session details",
      });
    });
};
