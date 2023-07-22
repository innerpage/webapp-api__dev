import dotenv from "dotenv";
dotenv.config();

export const config_App = {
  name_App: process.env.APP_NAME || "",
  url_App_Website: process.env.APP_WEBSITE_URL || "",
  url_App: process.env.APP_URL || "",
  email_App: process.env.APP_EMAIL || "",
  url_App_Support: process.env.APP_SUPPORT_URL || "",
  url_App_Tos: process.env.APP_TOS_URL || "",
  url_App_PrivacyPolicy: process.env.APP_PRIVACYPOLICY_URL || "",
  url_App_CancellationAndRefundPolicy:
    process.env.APP_CANCELLATIONANDREFUND_URL || "",
  name_App_Name_SessionKey: process.env.APP_SESSIONKEY_NAME || "",
  name_Business: process.env.BUSINESS_NAME || "",
  url_Website_Business: process.env.BUSINESS_WEBSITE_URL,
  address_Business: process.env.BUSINESS_ADDRESS || "",
  email_Business: process.env.BUSINESS_EMAIL,
};
