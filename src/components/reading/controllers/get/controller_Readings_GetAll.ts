import { Request, Response } from "express";

import { dal_Document_Read_By_Ids } from "../../../document/dals";
import { dal_Readings_GetAll_By_AccountId } from "../../dals";

export const controller_Readings_GetAll = async (
  req: Request,
  res: Response
) => {
  let readings: any = await dal_Readings_GetAll_By_AccountId(
    res.locals.id_Account
  );

  let ids_Reading: any = [];
  readings.map((reading: any) => {
    ids_Reading.push(reading.document_id);
  });

  let attributes: any = ["id", "title"];
  let documents: any = await dal_Document_Read_By_Ids(ids_Reading, attributes);

  return res.status(200).json({
    success: true,
    message: "Fetched readings",
    payload: documents,
  });
};
