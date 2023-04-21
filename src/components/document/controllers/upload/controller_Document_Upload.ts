import { Request, Response } from "express";

import { dal_Document_Write_NewDocument } from "../../dals";
import { dal_Account_Read_ByAccountId } from "../../../account/dals";

import { Helper_Upload_ToCloudinary } from "../../../../global/helpers";

interface LooseObj {
  [key: string]: any;
}

export const controller_Document_Upload = async (
  req: Request,
  res: Response
) => {
  let account: any = await dal_Account_Read_ByAccountId(res.locals.id_Account);
  let publisher: any = await account.getPublisher();

  if (!publisher) {
    return res.status(400).json({
      success: false,
      message: "❌ You are not a publisher",
    });
  }

  const files: any = req.files;

  let result: any = await Helper_Upload_ToCloudinary(
    files[0],
    res.locals.title,
    res.locals.sub_title,
    publisher.business_name,
    publisher.product_name
  );

  let url_doc: string = result.secure_url;

  let returnObj_NewDocument: LooseObj = await dal_Document_Write_NewDocument(
    res.locals.title,
    url_doc,
    res.locals.price_inr,
    res.locals.price_usd,
    res.locals.id_publication
  );
  console.log(returnObj_NewDocument.message);

  if (!returnObj_NewDocument.success) {
    console.log(`Failed to upload new document`);
    console.log(returnObj_NewDocument.payload);
    return res.status(400).json({
      success: false,
      message: "❌ Failed to upload new document",
      payload: returnObj_NewDocument.payload,
    });
  }

  res.status(200).json({
    success: true,
    message: "Document uploaded",
  });
};
