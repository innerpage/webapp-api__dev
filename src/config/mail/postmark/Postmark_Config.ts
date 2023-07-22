import dotenv from "dotenv";
dotenv.config();

export const Postmark_Config = {
  token: process.env.Postmark_Token!,
  template: {
    Email_Verification_Code: {
      id: process.env.Postmark_Template_Email_Verification_Code,
    },
    Password_Reset_Code: {
      id: process.env.Postmark_Template_Password_Reset_Code,
    },
    Password_Reset_Confirmation: {
      id: process.env.Postmark_Template_Confirm_Password_Reset,
    },
  },
};
