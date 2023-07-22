import { Request, Response } from "express";
import { dal_Account__Read__By__Id_Account } from "../../dals";
import { App_Config } from "../../../../config";

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
    message: "✅ Fetched account & app details",
    payload: {
      details_Account: payload_AccountDetails,
      details_App: payload_AppDetails,
    },
  });
};
