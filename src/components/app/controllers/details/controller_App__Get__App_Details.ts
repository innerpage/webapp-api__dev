import { Request, Response } from "express";
import { AppConfig } from "../../../../config";

export const controller_App_Get_App_Details = async (
  req: Request,
  res: Response
) => {
  let payload_App_Details: any = {
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
    clientCountry: res.locals.clientCountry,
  };

  return res.status(200).json({
    success: true,
    message: "✅ Fetched app details",
    payload: payload_App_Details,
  });
};
