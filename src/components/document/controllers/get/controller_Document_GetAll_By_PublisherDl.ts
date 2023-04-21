import { Request, Response } from "express";
import requestCountry from "request-country";

import { dal_Publisher_Read_By_Origin } from "../../../publisher/dals";

interface LooseObj {
  [key: string]: any;
}

export const controller_Document_GetAll_By_PublisherDl = async (
  req: Request,
  res: Response
) => {
  let publisher: any = await dal_Publisher_Read_By_Origin(res.locals.origin);

  if (!publisher) {
    return res.status(400).json({
      success: false,
      message: "❌ Could not fetch publisher",
    });
  }

  let documents: any = await publisher.getDocuments();

  let payload: any = [];

  let code_Country: any = requestCountry(req, "IN");

  console.log(`code_Country: ${code_Country}`);

  if (!code_Country) {
    code_Country = "IN";
  }

  documents.map((document: any) => {
    let obj: any = {
      id: document.id,
      title: document.title,
      sub_Title: document.sub_title,
      description: document.description,
      currency: code_Country === "IN" ? "₹" : "$",
      price: code_Country === "IN" ? document.price_inr : document.price_usd,
    };
    payload.push(obj);
  });

  res.status(200).json({
    success: true,
    message: "Document fetched",
    payload: payload,
  });
};
