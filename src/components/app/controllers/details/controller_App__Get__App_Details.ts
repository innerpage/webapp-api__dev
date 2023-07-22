import { Request, Response } from "express";
import { App_Config } from "../../../../config";

export const controller_App__Get__App_Details = async (
  req: Request,
  res: Response
) => {
  let payload_App_Details: any = {
    App_Name: App_Config.App_Name,
    App_Website_Url: App_Config.App_Website_Url,
    App_Url: App_Config.App_Url,
    App_Email: App_Config.App_Email,
    App_Support_Url: App_Config.App_Support_Url,
    App_Tos_Url: App_Config.App_Tos_Url,
    App_PrivacyPolicy_Url: App_Config.App_PrivacyPolicy_Url,
    App_CancellationAndRefund_Url: App_Config.App_CancellationAndRefund_Url,
    App_SessionKey_Name: App_Config.App_SessionKey_Name,
    App_Business_Name: App_Config.App_Business_Name,
    App_Business_Website_Url: App_Config.App_Business_Website_Url,
    App_Business_Address: App_Config.App_Business_Address,
    App_Business_Email: App_Config.App_Business_Email,
    country__Client: res.locals.country__Client,
  };

  return res.status(200).json({
    success: true,
    message: "✅ Fetched app details",
    payload: payload_App_Details,
  });
};
