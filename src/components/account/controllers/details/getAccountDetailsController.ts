import { Request, Response } from "express";
import { readAccountById } from "../../dals";
import { AppConfig } from "../../../../config";

export const getAccountDetailsController = async (
  req: Request,
  res: Response
) => {
  let account: any = await readAccountById(res.locals.accountId);

  let accountDetailsPayload: any = {
    firstName: account.first_name,
    lastName: account.last_name,
    email: account.email,
    isEmailVerified: account.is_email_verified,
    isSessionActive: true,
  };

  let appDetailsPayload: any = {
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
    message: "✅ Fetched account & app details",
    payload: {
      details_Account: accountDetailsPayload,
      details_App: appDetailsPayload,
    },
  });
};
