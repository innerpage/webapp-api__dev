import { Request, Response } from "express";

import { dal_Document_Read_By_DocumentId } from "../../dals";
import { dal_Publisher_Read_By_Id } from "../../../publisher/dals";

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

  // let publisher: any = await document.publication.getPublisher();
  let publisher: any = await dal_Publisher_Read_By_Id(
    document.publication.publisherId
  );
  let gateway: any = await publisher.getGateway();

  let payload = {
    name_Publication: document.publication.title,
    name_Document: document.title,
    stripe_Key_Public: gateway.name === "stripe" ? gateway.public_key : "",
  };

  return res.status(200).json({
    success: true,
    message: "Documents fetched",
    payload: payload,
  });
};
