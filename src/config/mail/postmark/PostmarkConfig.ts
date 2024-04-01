import dotenv from "dotenv";
dotenv.config();

export const PostmarkConfig = {
  token: process.env.POSTMARK_TOKEN!,
  template: {
    emailVerificationLink: {
      id: parseInt(process.env.POSTMARK_TEMPLATE_EMAIL_VERIFICATION_LINK!),
    },
    passwordResetLink: {
      id: parseInt(process.env.POSTMARK_TEMPLATE_PASSWORD_RESET_LINK!),
    },
    passwordResetConfirmation: {
      id: parseInt(process.env.POSTMARK_TEMPLATE_CONFIRM_PASSWORD_RESET!),
    },
  },
};
