import dotenv from "dotenv";
dotenv.config();

export const config_App = {
  App_Name: process.env.App_Name || "",
  App_Website_Url: process.env.App_Website_Url || "",
  App_Url: process.env.App_Url || "",
  App_Email: process.env.App_Email || "",
  App_Support_Url: process.env.App_Support_Url || "",
  App_Tos_Url: process.env.App_Tos_Url || "",
  App_PrivacyPolicy_Url: process.env.App_PrivacyPolicy_Url || "",
  url_App_CancellationAndRefundPolicy:
    process.env.App_CancellationAndRefund_Url || "",
  name_App_Name_SessionKey: process.env.App_SessionKey_Name || "",
  name_Business: process.env.App_Business_Name || "",
  url_Website_Business: process.env.App_Business_Website_Url,
  address_Business: process.env.App_Business_Address || "",
  email_Business: process.env.App_Business_Email,
};
