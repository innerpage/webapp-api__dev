import { Request, Response } from "express";
import { dal_Account__Read__By__Id_Account } from "../../dals";
import { config_App } from "../../../../config";

export const controller_Account__Get__Account_Details = async (
  req: Request,
  res: Response
) => {
  let account: any = await dal_Account__Read__By__Id_Account(
    res.locals.id_Account
  );

  let payload_AccountDetails: any = {
    name_First: account.first_name,
    name_Last: account.last_name,
    email: account.email,
    isVerified_Email: account.is_email_verified,
    isActive_Session: true,
  };

  let payload_AppDetails: any = {
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
    message: "✅ Fetched account & app details",
    payload: {
      details_Account: payload_AccountDetails,
      details_App: payload_AppDetails,
    },
  });
};
