import { Request, Response } from "express";

import Stripe from "stripe";
import { writePurchaseStatus } from "../../../purchase/dals";
import { ConfigVar } from "../../../../global/vars";

export const stripeCheckSessionController = async (
  req: Request,
  res: Response
) => {
  const stripe = new Stripe(ConfigVar.stripe.key.secret, {
    apiVersion: "2022-11-15",
  });

  await stripe.checkout.sessions
    .retrieve(res.locals.sessionId)
    .then(async (session) => {
      if (session.payment_status != "paid") {
        return res.status(200).json({
          success: false,
          message: "❌ Payment unsuccessful",
          payload: {},
        });
      }

      const updatedPurchase = await writePurchaseStatus(res.locals.sessionId);

      if (!updatedPurchase.success) {
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
