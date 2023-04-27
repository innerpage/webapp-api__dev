import { Request, Response } from "express";

import { dal_Document_Read_By_DocumentId } from "../../dals";

export const controller_Document_Read_By_DocumentId = async (
  req: Request,
  res: Response
) => {
  const document: any = await dal_Document_Read_By_DocumentId(
    res.locals.id_Document
  );
  if (!document) {
    console.log("❌ Could not find document");
    return res.status(400).json({
      success: false,
      message: "❌ Could not find document",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Documents fetched",
    payload: document,
  });
};
