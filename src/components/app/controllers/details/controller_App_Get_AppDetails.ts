import { Request, Response } from "express";
import { config_App } from "../../../../config/";

export const controller_App_Get_AppDetails = async (
  req: Request,
  res: Response
) => {
  let payload_AppDetails: any = {
    // name_First: account.first_name,
    // name_Last: account.last_name,
    // email: account.email,
    // isPublisher: account.is_publisher,
    // isVerified_Email: account.is_email_verified,
    // isActive_Session: true,
  };

  return res.status(200).json({
    success: true,
    message: "✅ Fetched app details",
    payload: payload_AppDetails,
  });
};
