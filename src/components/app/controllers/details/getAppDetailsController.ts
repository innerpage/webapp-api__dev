import { Request, Response } from "express";
import { AppConfig } from "../../../../config";

export const getAppDetailsController = async (req: Request, res: Response) => {
  let appDetailsResponseObject: any = {
    appName: AppConfig.appName,
    appWebsiteUrl: AppConfig.appWebsiteUrl,
    appUrl: AppConfig.appUrl,
    appEmail: AppConfig.appEmail,
    appSupportUrl: AppConfig.appSupportUrl,
    appTosUrl: AppConfig.appTosUrl,
    appPrivacyPolicyUrl: AppConfig.appPrivacyPolicyUrl,
    appCancellationAndRefundUrl: AppConfig.appCancellationAndRefundUrl,
    appSessionKey: AppConfig.appSessionKey,
    businessName: AppConfig.businessName,
    businessWebsite: AppConfig.businessWebsite,
    businessAddress: AppConfig.businessAddress,
    businessEmail: AppConfig.businessEmail,
    clientCountry: res.locals.clientCountry,
  };

  return res.status(200).json({
    success: true,
    message: "✅ Fetched app details",
    payload: appDetailsResponseObject,
  });
};
