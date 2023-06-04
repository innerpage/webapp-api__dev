import { Request, Response } from "express";

import { dal_Document_Read_By_Id } from "../../../document/dals";
import { dal_Purchase_Read_By_Id } from "../../../purchase/dals";

export const controller_Reading_Get_By_Id = async (
  req: Request,
  res: Response
) => {
  let document: any = await dal_Purchase_Read_By_Id(res.locals.id_Document);
  if (!document.success) {
    return res.status(400).json({
      success: false,
      message: "Document not purchased",
    });
  }

  let reading: any = await dal_Document_Read_By_Id(res.locals.id_Document);

  if (!reading) {
    return res.status(400).json({
      success: false,
      message: "Could not find the reading",
    });
  }

  let returnObj = {};

  return res.status(200).json({
    success: true,
    message: "Fetched reading",
    payload: returnObj,
  });
};
