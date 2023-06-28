import { Request, Response } from "express";

import { dal_Publication_Read_By_Id } from "../../../publication/dals";

export const controller_Documents_Read_By_PublicationId = async (
  req: Request,
  res: Response
) => {
  const publication: any = await dal_Publication_Read_By_Id(
    res.locals.id_Publication
  );
  if (!publication) {
    console.log("❌ Could not find publication");
    return res.status(400).json({
      success: false,
      message: "❌ Could not find publication",
    });
  }

  const documents: any = await publication.getDocuments();
  if (!documents) {
    console.log("❌ Could not find documents");
    return res.status(400).json({
      success: false,
      message: "❌ Could not find documents",
    });
  }

  let payload: any = [];
  documents.map((document: any) => {
    let obj: any = {
      id: document.id,
      title: document.title,
    };
    payload.push(obj);
  });

  return res.status(200).json({
    success: true,
    message: "✅ Documents fetched",
    payload: payload,
  });
};
