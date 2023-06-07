import { Request, Response } from "express";

import { dal_Page_Read_All } from "../../dals";
import { dal_Purchase_Read_By_AccountId_DocumentId } from "../../../purchase/dals";

export const controller_Page_Read_By_No = async (
  req: Request,
  res: Response
) => {
  const purchase: any = await dal_Purchase_Read_By_AccountId_DocumentId(
    res.locals.id_Account,
    res.locals.id_Document
  );

  if (!purchase) {
    console.log(`document NOT_PURCHASED`);
    return res.status(400).json({
      success: false,
      message: "document NOT_PURCHASED",
    });
  }

  const pages: any = await dal_Page_Read_All(res.locals.id_Document);

  if (res.locals.no_Page > pages.length) {
    console.log(`page number OUT_OF_BOUND`);
    return res.status(400).json({
      success: false,
      message: "page number OUT_OF_BOUND",
    });
  }

  const page: any = pages[res.locals.no_Page - 1];
  const payload = {
    url_Page: page.url_page,
  };

  return res.status(200).json({
    success: true,
    message: "Page fetched",
    payload: payload,
  });
};
