import dotenv from "dotenv";
dotenv.config();

export const Postmark_Config = {
  token: process.env.Postmark_Token!,
  template: {
    mail_Verify_Email: {
      id: process.env.Postmark_TemplateId_For_EmailVerificationCode_Mail,
    },
    mail_Reset_Password: {
      id: process.env.Postmark_TemplateId_For_PasswordResetCode_Mail,
    },
    mail_Confirm_PasswordReset: {
      id: process.env.Postmark_TemplateId_For_ConfirmPasswordReset_Mail,
    },
  },
};
