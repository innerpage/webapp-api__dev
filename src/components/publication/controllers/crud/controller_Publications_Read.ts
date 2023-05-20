import { Request, Response } from "express";

import { dal_Publisher_Read_By_Origin } from "../../../publisher/dals/";
import { dal_Publications_Documents_Read_By_PublisherId } from "../../dals/";

export const controller_Publications_Read = async (
  req: Request,
  res: Response
) => {
  const publisher: any = await dal_Publisher_Read_By_Origin(res.locals.origin);
  if (!publisher) {
    console.log("❌There are no publications yet");
    return res.status(400).json({
      success: false,
      message: "❌There are no publications yet",
    });
  }

  const publications_And_Documents: any =
    await dal_Publications_Documents_Read_By_PublisherId(publisher.id);

  if (!publications_And_Documents) {
    console.log("❌ Could not fetch publications & documents");
    return res.status(400).json({
      success: false,
      message: "❌ Could not fetch publications & documents",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Publications and documents fetched",
    payload: publications_And_Documents,
  });
};
