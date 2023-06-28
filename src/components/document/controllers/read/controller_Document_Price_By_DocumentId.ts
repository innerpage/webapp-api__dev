import { Request, Response } from "express";

import { dal_Publisher_Read_By_Origin } from "../../../publisher/dals/";
import { dal_Gateway_Read_Backend } from "../../../gateway/dals";
import { dal_Document_Read_By_Id } from "../../dals";

import { nodeConfig } from "../../../../config";
import geoip from "geoip-lite";
import Stripe from "stripe";

export const controller_Document_Price_By_DocumentId = async (
  req: Request,
  res: Response
) => {
  let document: any;

  try {
    document = await dal_Document_Read_By_Id(res.locals.id_Document);
  } catch (e) {
    console.log(e);
  }

  if (!document) {
    console.log("❌ Could not find document");
    return res.status(400).json({
      success: false,
      message: "❌ Could not find document",
    });
  }

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
  const prices = await stripe.prices.list({
    expand: ["data.currency_options"],
  });

  let prices_Simplified: any = [];
  prices.data.map((price: any) => {
    let obj_Simplified_Price = {
      id_Price: price.id,
      price_Inr: price.currency_options.inr.unit_amount,
      price_Usd: price.currency_options.usd.unit_amount,
    };
    prices_Simplified.push(obj_Simplified_Price);
  });

  let price_Document: number = 0;
  let currency_Document: string = "";
  prices_Simplified.map((price: any) => {
    if (document.price_id === price.id_Price) {
      currency_Document = client_Country === "IN" ? "₹" : "$";
      price_Document =
        client_Country === "IN" ? price.price_Inr : price.price_Usd;
      price_Document = price_Document / 100;
    }
  });

  let obj_Document: any = {
    id: res.locals.id_Document,
    price: price_Document,
    currency: currency_Document,
  };

  return res.status(200).json({
    success: true,
    message: "✅ Document price fetched",
    payload: obj_Document,
  });
};
