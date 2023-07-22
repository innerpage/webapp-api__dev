import dotenv from "dotenv";
dotenv.config();

export const App_Config = {
  App_Name: process.env.App_Name || "",
  App_Website_Url: process.env.App_Website_Url || "",
  App_Url: process.env.App_Url || "",
  App_Email: process.env.App_Email || "",
  App_Support_Url: process.env.App_Support_Url || "",
  App_Tos_Url: process.env.App_Tos_Url || "",
  App_Privacy_Policy_Url: process.env.App_Privacy_Policy_Url || "",
  App_Cancellation_And_Refund_Url:
    process.env.App_Cancellation_And_Refund_Url || "",
  App_Session_Key_Name: process.env.App_Session_Key_Name || "",
  App_Business_Name: process.env.App_Business_Name || "",
  App_Business_Website_Url: process.env.App_Business_Website_Url,
  App_Business_Address: process.env.App_Business_Address || "",
  App_Business_Email: process.env.App_Business_Email,
};
