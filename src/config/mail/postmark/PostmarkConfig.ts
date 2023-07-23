import dotenv from "dotenv";
dotenv.config();

export const PostmarkConfig = {
  token: process.env.POSTMARK_TOKEN!,
  template: {
    emailVerificationCode: {
      id: process.env.POSTMARK_TEMPLATE_EMAIL_VERIFICATION_CODE,
    },
    passwordResetCode: {
      id: process.env.POSTMARK_TEMPLATE_PASSWORD_RESET_CODE,
    },
    passwordResetConfirmation: {
      id: process.env.POSTMARK_TEMPLATE_CONFIRM_PASSWORD_RESET,
    },
  },
};
