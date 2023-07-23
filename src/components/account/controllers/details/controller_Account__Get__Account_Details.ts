import { Request, Response } from "express";
import { dal_Account_Read_By_Id_Account } from "../../dals";
import { App_Config } from "../../../../config";

export const controller_Account_Get_Account_Details = async (
  req: Request,
  res: Response
) => {
  let account: any = await dal_Account_Read_By_Id_Account(
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
    message: "✅ Fetched account & app details",
    payload: {
      details_Account: payload_AccountDetails,
      details_App: payload_AppDetails,
    },
  });
};
