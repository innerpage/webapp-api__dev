import { Request, Response } from "express";

import { dal_Publisher_Read_By_Origin } from "../../../publisher/dals";
import { dal_Document_Read_By_Id } from "../../../document/dals";
import { dal_Gateway_Read_Backend } from "../../dals";
import { dal_Purchase_Write_NewPurchase } from "../../../purchase/dals";

import { nodeConfig } from "../../../../config";
import geoip from "geoip-lite";
import Stripe from "stripe";

export const controller_Stripe_Create_CheckoutSession = async (
  req: Request,
  res: Response
) => {
  const publisher: any = await dal_Publisher_Read_By_Origin(res.locals.origin);
  if (!publisher) {
    console.log("❌There are no publications yet");
    return res.status(400).json({
      success: false,
      message: "❌There are no publications yet",
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

  const document: any = await dal_Document_Read_By_Id(res.locals.id_Document);
  if (!document) {
    console.log("❌ Could not fetch document");
    return res.status(400).json({
      success: false,
      message: "❌ Could not fetch document",
    });
  }

  let client_Ip: any =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  if (nodeConfig.env === "dev") {
    client_Ip = "117.96.233.173"; // Indian IP
    // client_Ip = "207.97.227.239"; // American IP
  }

  let client_Geo: any = geoip.lookup(client_Ip);
  let client_Country: string = client_Geo.country;

  const stripe = new Stripe(gateway.secret_key, {
    apiVersion: "2022-11-15",
  });

  const session: any = await stripe.checkout.sessions.create({
    success_url: `${res.locals.origin}/payment-handle/{CHECKOUT_SESSION_ID}`,
    cancel_url: `${res.locals.origin}/payment-cancel/{CHECKOUT_SESSION_ID}`,
    line_items: [{ price: document.price_id, quantity: 1 }],
    mode: "payment",
    currency: client_Country === "IN" ? "INR" : "USD",
  });

  if (!session.id) {
    console.log("❌ Could not create Stripe checkout session");
    return res.status(400).json({
      success: false,
      message: "❌ Could not create Stripe checkout session",
    });
  }

  const purchase = await dal_Purchase_Write_NewPurchase(
    document.id,
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
