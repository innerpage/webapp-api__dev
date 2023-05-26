import { Request, Response } from "express";

import { dal_Publisher_Read_By_Origin } from "../../../publisher/dals/";
import { dal_Purchase_Update_Status } from "../../../purchase/dals";
import { dal_Gateway_Read_Backend } from "../../dals";

import Stripe from "stripe";

export const controller_Stripe_CheckSession = async (
  req: Request,
  res: Response
) => {
  const publisher: any = await dal_Publisher_Read_By_Origin(res.locals.origin);
  if (!publisher) {
    console.log("❌ There are no publications yet");
    return res.status(400).json({
      success: false,
      message: "❌ There are no publications yet",
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

  await stripe.checkout.sessions
    .retrieve(res.locals.id_Session)
    .then(async (session) => {
      console.log(session);
      if (session.payment_status != "paid") {
        return res.status(200).json({
          success: false,
          message: "❌ Payment unsuccessful",
          payload: session,
        });
      }

      const updated_Purchase = await dal_Purchase_Update_Status(
        res.locals.id_Session
      );

      if (!updated_Purchase.success) {
        return res.status(200).json({
          success: false,
          message: "❌ Payment status update failed",
          payload: session,
        });
      }

      return res.status(200).json({
        success: true,
        message: "Fetched session details",
        payload: session,
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
