import dotenv from "dotenv";
dotenv.config();

export const config_App = {
  name_App: process.env.APP_NAME || "",
  url_Website_App: process.env.APP_WEBSITE_URL || "",
  url_App: process.env.APP_URL,
  email_App: process.env.APP_EMAIL || "",
  name_Business: process.env.BUSINESS_NAME || "",
  url_Website_Business: process.env.BUSINESS_WEBSITE_URL,
  address_Business: process.env.BUSINESS_ADDRESS || "",
  email_Business: process.env.BUSINESS_EMAIL,
};
