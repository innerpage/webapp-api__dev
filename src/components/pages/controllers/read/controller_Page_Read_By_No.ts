import { Request, Response } from "express";

import { dal_Page_Read_All } from "../../dals";

export const controller_Page_Read_By_No = async (
  req: Request,
  res: Response
) => {
  // Check if page number is greater than no of pages

  const pages: any = await dal_Page_Read_All(res.locals.id_Document);

  if (!pages) {
    console.log(`pages does not EXIST`);
    return res.status(400).json({
      success: false,
      message: "Invalid password",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Page fetched",
    payload: pages,
  });
};
