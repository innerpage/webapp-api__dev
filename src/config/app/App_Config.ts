import dotenv from "dotenv";
dotenv.config();

export const App_Config = {
  APP_NAME: process.env.APP_NAME || "",
  APP_WEBSITE: process.env.APP_WEBSITE || "",
  APP_URL: process.env.APP_URL || "",
  APP_EMAIL: process.env.APP_EMAIL || "",
  APP_SUPPORT_URL: process.env.APP_SUPPORT_URL || "",
  APP_TOS: process.env.APP_TOS || "",
  APP_PRIVACY_POLICY: process.env.APP_PRIVACY_POLICY || "",
  APP_CANCELLATION_AND_REFUND: process.env.APP_CANCELLATION_AND_REFUND || "",
  APP_SESSION_KEY: process.env.APP_SESSION_KEY || "",
  BUSINESS_NAME: process.env.BUSINESS_NAME || "",
  BUSINESS_WEBSITE: process.env.BUSINESS_WEBSITE,
  BUSINESS_ADDRESS: process.env.BUSINESS_ADDRESS || "",
  BUSINESS_EMAIL: process.env.BUSINESS_EMAIL,
};
