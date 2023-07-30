import dotenv from "dotenv";
dotenv.config();

export const AppConfig = {
  appName: process.env.APP_NAME || "",
  appWebsiteUrl: process.env.APP_WEBSITE || "",
  appUrl: process.env.APP_URL || "",
  appEmail: process.env.APP_EMAIL || "",
  appSupportUrl: process.env.APP_SUPPORT_URL || "",
  appTosUrl: process.env.APP_TOS || "",
  appPrivacyPolicyUrl: process.env.APP_PRIVACY_POLICY || "",
  appCancellationAndRefundUrl: process.env.APP_CANCELLATION_AND_REFUND || "",
  appSessionKey: process.env.APP_SESSION_KEY || "",
  appMailerDomain: process.env.APP_MAILER_DOMAIN || "",
  businessName: process.env.BUSINESS_NAME || "",
  businessWebsite: process.env.BUSINESS_WEBSITE,
  businessAddress: process.env.BUSINESS_ADDRESS || "",
  businessEmail: process.env.BUSINESS_EMAIL,
};
