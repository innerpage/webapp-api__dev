import { Request, Response } from "express";

import { dal_Document_Write_NewDocument } from "../../dals";
import { dal_Account_Read_ByAccountId } from "../../../account/dals";
import { dal_Publication_Read_By_Id } from "../../../publication/dals";
import { dal_Page_Write_All } from "../../../pages/dals";

import {
  helper_Document_Split_Pdf,
  helper_Document_Upload_To_Cloudinary,
  helper_Document_Clean_Upload,
} from "../../helpers";

interface LooseObj {
  [key: string]: any;
}

export const controller_Document_Upload = async (
  req: Request,
  res: Response
) => {
  let account: any = await dal_Account_Read_ByAccountId(res.locals.id_Account);
  let publisher: any = await account.getPublisher();

  let publication: any = await dal_Publication_Read_By_Id(
    res.locals.id_Publication
  );

  if (!publication) {
    console.log("Could not find publication");
    return res.status(400).json({
      success: false,
      message: "❌ Could not find publication",
    });
  }

  let documents: any = await publication.getDocuments();
  let no_Sl: number = 0;

  if (documents) {
    no_Sl = documents.length + 1;
  } else {
    no_Sl = 1;
  }

  let returnObj_NewDocument: LooseObj = await dal_Document_Write_NewDocument(
    res.locals.title,
    res.locals.id_Price,
    no_Sl,
    res.locals.id_Publication
  );
  console.log(returnObj_NewDocument.message);

  if (!returnObj_NewDocument.success) {
    console.log(`Failed to save new document`);
    console.log(returnObj_NewDocument.payload);
    return res.status(400).json({
      success: false,
      message: "❌ Failed to save new document",
      payload: returnObj_NewDocument.payload,
    });
  }

  const files: any = req.files;
  const array_Page_Paths: any = await helper_Document_Split_Pdf(
    files[0],
    returnObj_NewDocument.payload.dataValues.id
  );

  let array_Pages_And_Urls: any = [];
  for (const page of array_Page_Paths) {
    const result: any = await helper_Document_Upload_To_Cloudinary(
      page.path,
      publisher.business_name,
      publication.title,
      publication.edition,
      res.locals.title
    );
    let obj_Page: any = {
      url_page: result.secure_url,
      no: page.no,
      documentId: returnObj_NewDocument.payload.dataValues.id,
    };
    array_Pages_And_Urls.push(obj_Page);
  }

  let returnObj_NewPages: LooseObj = await dal_Page_Write_All(
    array_Pages_And_Urls
  );
  console.log(returnObj_NewPages.message);

  if (!returnObj_NewPages.success) {
    console.log(`Failed to create new pages`);
    console.log(returnObj_NewPages.payload);
    return res.status(400).json({
      success: false,
      message: "❌ Failed to create new pages",
      payload: returnObj_NewPages.payload,
    });
  }

  await helper_Document_Clean_Upload(
    returnObj_NewDocument.payload.dataValues.id
  );

  return res.status(200).json({
    success: true,
    message: "Document uploaded",
  });
};
