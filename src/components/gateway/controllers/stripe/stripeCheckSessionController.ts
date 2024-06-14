import { Request, Response } from "express";

import Stripe from "stripe";
import { writePurchaseStatus } from "../../../purchase/dals";
import { Var } from "../../../../global/var";

export const stripeCheckSessionController = async (
  req: Request,
  res: Response
) => {
  const stripe = new Stripe(Var.stripe.key.secret, {
    apiVersion: "2022-11-15",
  });

  await stripe.checkout.sessions
    .retrieve(res.locals.sessionId)
    .then(async (session) => {
      if (session.payment_status != "paid") {
        return res.status(400).json({
          success: false,
          message: `${Var.app.emoji.failure} Payment unsuccessful`,
          payload: {},
        });
      }

      const updatedPurchase = await writePurchaseStatus(res.locals.sessionId);

      if (!updatedPurchase.success) {
        return res.status(400).json({
          success: false,
          message: `${Var.app.emoji.failure} Payment status update failed`,
          payload: {},
        });
      }

      return res.status(200).json({
        success: true,
        message: `${Var.app.emoji.success} Payment successful`,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        success: false,
        message: `${Var.app.emoji.failure} Could not check session details`,
      });
    });
};
