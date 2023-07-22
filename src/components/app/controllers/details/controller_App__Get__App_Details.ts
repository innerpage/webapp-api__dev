import { Request, Response } from "express";
import { config_App } from "../../../../config";

export const controller_App__Get__App_Details = async (
  req: Request,
  res: Response
) => {
  let payload_App_Details: any = {
    App_Name: config_App.App_Name,
    App_Website_Url: config_App.App_Website_Url,
    App_Url: config_App.App_Url,
    App_Email: config_App.App_Email,
    App_Support_Url: config_App.App_Support_Url,
    App_Tos_Url: config_App.App_Tos_Url,
    App_PrivacyPolicy_Url: config_App.App_PrivacyPolicy_Url,
    url_App_CancellationAndRefundPolicy:
      config_App.url_App_CancellationAndRefundPolicy,
    name_App_Name_SessionKey: config_App.name_App_Name_SessionKey,
    name_Business: config_App.name_Business,
    url_Website_Business: config_App.url_Website_Business,
    address_Business: config_App.address_Business,
    email_Business: config_App.email_Business,
    country__Client: res.locals.country__Client,
  };

  return res.status(200).json({
    success: true,
    message: "✅ Fetched app details",
    payload: payload_App_Details,
  });
};
