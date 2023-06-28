import { Request, Response } from "express";

import {
  dal_Document_Write_NewDocument,
  dal_Document_Write_NewToc,
} from "../../dals";
import { dal_Account_Read_ByAccountId } from "../../../account/dals";
import { dal_Publication_Read_By_Id } from "../../../publication/dals";

import { helper_Document_Upload_To_Cloudinary } from "../../helpers";

import csv from "csvtojson";

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

  const files: any = req.files;
  let file_Doc: any;
  let file_Toc: any;
  files.forEach((file: any) => {
    if (file.fieldname === "file_Doc") {
      file_Doc = file;
    } else if (file.fieldname === "file_Toc") {
      file_Toc = file;
    }
  });

  const upload_Doc: any = await helper_Document_Upload_To_Cloudinary(
    file_Doc,
    publisher.business_name,
    publication.title,
    publication.edition,
    res.locals.title
  );

  let url_Doc: string = upload_Doc.secure_url;
  let returnObj_NewDocument: LooseObj = await dal_Document_Write_NewDocument(
    res.locals.title,
    url_Doc,
    res.locals.id_Price,
    no_Sl,
    res.locals.id_Publication
  );

  if (!returnObj_NewDocument.success) {
    console.log(`Failed to save new document`);
    console.log(returnObj_NewDocument.payload);
    return res.status(400).json({
      success: false,
      message: "❌ Failed to save new document",
      payload: returnObj_NewDocument.payload,
    });
  }

  let data_Toc: any;
  let id_Document: string = returnObj_NewDocument.payload.dataValues.id;
  if (file_Toc) {
    await csv()
      .fromString(file_Toc.buffer.toString())
      .then((userCsvRow) => {
        data_Toc = userCsvRow;
      });
    let returnObj_NewToc: LooseObj = await dal_Document_Write_NewToc(
      data_Toc,
      id_Document
    );
    if (!returnObj_NewToc.success) {
      console.log(`Failed to save new toc`);
      console.log(returnObj_NewToc.payload);
      return res.status(400).json({
        success: false,
        message: "❌ Failed to save new toc",
        payload: returnObj_NewToc.payload,
      });
    }
  }

  return res.status(200).json({
    success: true,
    message: "✅ Document uploaded",
  });
};
