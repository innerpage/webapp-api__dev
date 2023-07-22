import { Request, Response } from "express";
import { config_App } from "../../../../config";

export const controller_App__Get__App_Details = async (
  req: Request,
  res: Response
) => {
  let payload_AppDetails: any = {
    name_App: config_App.name_App,
    url_App_Website: config_App.url_App_Website,
    url_App: config_App.url_App,
    email_App: config_App.email_App,
    url_App_Support: config_App.url_App_Support,
    url_App_Tos: config_App.url_App_Tos,
    url_App_PrivacyPolicy: config_App.url_App_PrivacyPolicy,
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
    payload: payload_AppDetails,
  });
};
