import { Request, Response } from "express";

import { dal_Document_Read_By_Ids } from "../../../document/dals";
import { dal_Library_GetAll } from "../../dals";

export const controller_Library_GetAll = async (
  req: Request,
  res: Response
) => {
  let library: any = await dal_Library_GetAll(res.locals.id_Account);

  let ids_Library_Items: any = [];
  library.map((reading: any) => {
    ids_Library_Items.push(reading.document_id);
  });

  let attributes: any = ["id", "title"];
  let documents: any = await dal_Document_Read_By_Ids(
    ids_Library_Items,
    attributes
  );

  return res.status(200).json({
    success: true,
    message: "Fetched readings",
    payload: documents,
  });
};
