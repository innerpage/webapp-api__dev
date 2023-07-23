import { Request, Response } from "express";
import { dal_Account_Read_By_Id_Account } from "../../dals";
import { AppConfig } from "../../../../config";

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
    APP_NAME: AppConfig.appName,
    APP_WEBSITE: AppConfig.appWebsiteUrl,
    APP_URL: AppConfig.appUrl,
    APP_EMAIL: AppConfig.appEmail,
    APP_SUPPORT_URL: AppConfig.appSupportUrl,
    APP_TOS: AppConfig.appTosUrl,
    APP_PRIVACY_POLICY: AppConfig.appPrivacyPolicyUrl,
    APP_CANCELLATION_AND_REFUND: AppConfig.appCancellationAndRefundUrl,
    APP_SESSION_KEY: AppConfig.appSessionKey,
    BUSINESS_NAME: AppConfig.businessName,
    BUSINESS_WEBSITE: AppConfig.businessWebsite,
    BUSINESS_ADDRESS: AppConfig.businessAddress,
    BUSINESS_EMAIL: AppConfig.businessEmail,
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
