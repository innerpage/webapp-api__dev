import dotenv from "dotenv";
dotenv.config();

export const config_App = {
  name__App: process.env.APP_NAME || "",
  url__App__Website: process.env.APP_WEBSITE_URL || "",
  url_App: process.env.APP_URL || "",
  email__App: process.env.APP_EMAIL || "",
  url__App__Support: process.env.APP_SUPPORT_URL || "",
  url__App__Tos: process.env.APP_TOS_URL || "",
  url__App__Privacy_Policy: process.env.APP_PRIVACYPOLICY_URL || "",
  url__App__Cancellation_And_Refund_Policy:
    process.env.APP_CANCELLATIONANDREFUND_URL || "",
  name__App__Session_Key: process.env.APP_SESSIONKEY_NAME || "",
  name__Business: process.env.BUSINESS_NAME || "",
  url__Website__Business: process.env.BUSINESS_WEBSITE_URL,
  address__Business: process.env.BUSINESS_ADDRESS || "",
  email__Business: process.env.BUSINESS_EMAIL,
};
