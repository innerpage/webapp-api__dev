import dotenv from "dotenv";
dotenv.config();

export const PostmarkConfig = {
  token: process.env.POSTMARK_TOKEN!,
  template: {
    id: {
      accountChangeConfirmation: parseInt(
        process.env.POSTMARK_TEMPLATE_ACCOUNT_CHANGE_CONFIRMATION!
      ),
      emailVerificationLink: parseInt(
        process.env.POSTMARK_TEMPLATE_EMAIL_VERIFICATION_LINK!
      ),
      passwordResetLink: parseInt(
        process.env.POSTMARK_TEMPLATE_PASSWORD_RESET_LINK!
      ),
      passwordResetConfirmation: parseInt(
        process.env.POSTMARK_TEMPLATE_CONFIRM_PASSWORD_RESET!
      ),
    },
  },
};
