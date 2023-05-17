import { Request, Response } from "express";

import { dal_Publisher_Read_By_Origin } from "../../../publisher/dals";
import { dal_Gateway_Read } from "../../dals";

export const controller_Gateway_Read = async (req: Request, res: Response) => {
  const publisher: any = await dal_Publisher_Read_By_Origin(res.locals.origin);
  if (!publisher) {
    console.log("❌ Could not find publisher");
    return res.status(400).json({
      success: false,
      message: "❌ Could not find publisher",
    });
  }

  const gateway: any = await dal_Gateway_Read(publisher.id);
  if (!gateway) {
    console.log("❌ Could not fetch gateway");
    return res.status(400).json({
      success: false,
      message: "❌ Could not fetch gateway",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Gateway fetched",
    payload: gateway,
  });
};
