import { Request, Response } from "express";
import { App_Config } from "../../../../config";

export const controller_App_Get_App_Details = async (
  req: Request,
  res: Response
) => {
  let payload_App_Details: any = {
    APP_NAME: App_Config.APP_NAME,
    APP_WEBSITE: App_Config.APP_WEBSITE,
    APP_URL: App_Config.APP_URL,
    APP_EMAIL: App_Config.APP_EMAIL,
    APP_SUPPORT_URL: App_Config.APP_SUPPORT_URL,
    APP_TOS: App_Config.APP_TOS,
    APP_PRIVACY_POLICY: App_Config.APP_PRIVACY_POLICY,
    APP_CANCELLATION_AND_REFUND: App_Config.APP_CANCELLATION_AND_REFUND,
    APP_SESSION_KEY: App_Config.APP_SESSION_KEY,
    BUSINESS_NAME: App_Config.BUSINESS_NAME,
    BUSINESS_WEBSITE: App_Config.BUSINESS_WEBSITE,
    BUSINESS_ADDRESS: App_Config.BUSINESS_ADDRESS,
    BUSINESS_EMAIL: App_Config.BUSINESS_EMAIL,
    country_Client: res.locals.country_Client,
  };

  return res.status(200).json({
    success: true,
    message: "✅ Fetched app details",
    payload: payload_App_Details,
  });
};
