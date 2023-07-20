import { Request, Response } from "express";
import { dal_Account_Read_By_AccountId } from "../../dals";
import { config_App } from "../../../../config/";

export const controller_Account_GetDetails = async (
  req: Request,
  res: Response
) => {
  let account: any = await dal_Account_Read_By_AccountId(res.locals.id_Account);

  let payload_AccountDetails: any = {
    name_First: account.first_name,
    name_Last: account.last_name,
    email: account.email,
    isVerified_Email: account.is_email_verified,
    isActive_Session: true,
  };

  let payload_AppDetails: any = {
    name_App: config_App.name_App,
    url_App_Website: config_App.url_App_Website,
    url_App: config_App.url_App,
    email_App: config_App.email_App,
    url_App_Support: config_App.url_App_Support,
    url_App_Tos: config_App.url_App_Tos,
    url_App_PrivacyPolicy: config_App.url_App_PrivacyPolicy,
    url_App_CancellationRefundPolicy:
      config_App.url_App_CancellationRefundPolicy,
    name_App_SessionKey: config_App.name_App_SessionKey,
    name_Business: config_App.name_Business,
    url_Website_Business: config_App.url_Website_Business,
    address_Business: config_App.address_Business,
    email_Business: config_App.email_Business,
    country_Client: res.locals.country_Client,
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
