import { Request, Response } from "express";
import { config__App } from "../../../../config/";

export const controller_App_Get_AppDetails = async (
  req: Request,
  res: Response
) => {
  let payload_AppDetails: any = {
    name_App: config__App.name_App,
    url_App_Website: config__App.url_App_Website,
    url_App: config__App.url_App,
    email_App: config__App.email_App,
    url_App_Support: config__App.url_App_Support,
    url_App_Tos: config__App.url_App_Tos,
    url_App_PrivacyPolicy: config__App.url_App_PrivacyPolicy,
    url_App_CancellationRefundPolicy:
      config__App.url_App_CancellationRefundPolicy,
    name_App_SessionKey: config__App.name_App_SessionKey,
    name_Business: config__App.name_Business,
    url_Website_Business: config__App.url_Website_Business,
    address_Business: config__App.address_Business,
    email_Business: config__App.email_Business,
    country_Client: res.locals.country_Client,
  };

  return res.status(200).json({
    success: true,
    message: "✅ Fetched app details",
    payload: payload_AppDetails,
  });
};
