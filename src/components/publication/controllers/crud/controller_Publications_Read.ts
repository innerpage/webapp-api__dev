import { Request, Response } from "express";
import { dal_Publisher_Read_By_Origin } from "../../../publisher/dals/";
import { dal_Publications_Documents_Read_By_PublisherId } from "../../dals/";
import { dal_Gateway_Read_Backend } from "../../../gateway/dals";
import { nodeConfig } from "../../../../config";
import geoip from "geoip-lite";
import Stripe from "stripe";

export const controller_Publications_Read = async (
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

  const publications_And_Their_Documents: any =
    await dal_Publications_Documents_Read_By_PublisherId(publisher.id);

  if (!publications_And_Their_Documents) {
    console.log("❌ Could not fetch publications & documents");
    return res.status(400).json({
      success: false,
      message: "❌ Could not fetch publications & documents",
    });
  }

  let client_Ip: any =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  if (nodeConfig.env === "dev") {
    client_Ip = "117.96.233.173";
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

  let final_Publications_And_Documents: any = [];
  publications_And_Their_Documents.map((publication: any) => {
    let id_Publication: string = publication.id;
    let title_Publication: string = publication.title;
    let edition_Publication: string = publication.edition;
    let description_Publication: string = publication.description;
    let url_Sample_Publication: string = publication.url_sample;
    let url_Toc_Publication: string = publication.url_toc;
    let url_Cover_Publication: string = publication.url_cover;
    let documents_Publication: any = publication.documents;
    let new_Documents_Publications: any = [];

    documents_Publication.map((document: any) => {
      let id_Document: string = document.id;
      let title_Document: string = document.title;
      let slNo_Document: number = document.sl_no;
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
        id: id_Document,
        title: title_Document,
        slNo: slNo_Document,
        price: price_Document,
        currency: currency_Document,
      };

      new_Documents_Publications.push(obj_Document);
    });

    new_Documents_Publications.sort((a: any, b: any) => {
      return a.slNo - b.slNo;
    });

    let obj_Publication: any = {
      id: id_Publication,
      title: title_Publication,
      edition: edition_Publication,
      description: description_Publication,
      url_Sample: url_Sample_Publication,
      url_Toc: url_Toc_Publication,
      url_Cover: url_Cover_Publication,
      documents: new_Documents_Publications,
    };

    final_Publications_And_Documents.push(obj_Publication);
  });

  return res.status(200).json({
    success: true,
    message: "✅ Publications and documents fetched",
    payload: final_Publications_And_Documents,
  });
};
