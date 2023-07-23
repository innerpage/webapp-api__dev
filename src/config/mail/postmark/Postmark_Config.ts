import dotenv from "dotenv";
dotenv.config();

export const Postmark_Config = {
  token: process.env.POSTMARK_TOKEN!,
  template: {
    Email_Verification_Code: {
      id: process.env.POSTMARK_TEMPLATE_EMAIL_VERIFICATION_CODE,
    },
    Password_Reset_Code: {
      id: process.env.POSTMARK_TEMPLATE_PASSWORD_RESET_CODE,
    },
    Password_Reset_Confirmation: {
      id: process.env.POSTMARK_TEMPLATE_CONFIRM_PASSWORD_RESET,
    },
  },
};
