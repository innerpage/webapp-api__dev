import { Request, Response } from "express";

import Stripe from "stripe";
import { dal_Purchase__Write__Status_Purchase } from "../../../purchase/dals";
import { config_Stripe } from "../../../../config";

export const controller_Gateway__Stripe_CheckSession = async (
  req: Request,
  res: Response
) => {
  config_Stripe;
  const stripe = new Stripe(config_Stripe.key__Secret, {
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

      const updated_Purchase = await dal_Purchase__Write__Status_Purchase(
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
        message: "❌ Could not session details",
      });
    });
};
