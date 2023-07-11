import dotenv from "dotenv";
dotenv.config();

export const config_App = {
  name_Product: process.env.PRODUCT_NAME || "",
  url_Website_Product: process.env.PRODUCT_WEBSITE_URL || "",
  url_App_Product: process.env.PRODUCT_APP_URL,
  url_Base_Product:
    process.env.NODE_ENV === "dev"
      ? `http:localhost:${process.env.NODE_PORT}`
      : `https://${process.env.PRODUCT_APP_URL}`,
  email_Product: process.env.PRODUCT_EMAIL || "",
  name_Business: process.env.BUSINESS_NAME || "",
  url_Website_Business: process.env.BUSINESS_WEBSITE_URL,
  address_Business: process.env.BUSINESS_ADDRESS || "",
  email_Business: process.env.BUSINESS_EMAIL,
};
