import dotenv from "dotenv";
dotenv.config();

export const config_Stripe = {
  version_Api: process.env.STRIPE_API_VERSION || "",
  key_Public: process.env.STRIPE_PUBLIC_KEY || "",
  key_Secret: process.env.STRIPE_SECRET_KEY || "",
  secret_Webhook: process.env.STRIPE_WEBHOOK_SECRET || "",
  fee_Processing: process.env.STRIPE_PROCESSING_FEE || "",
};
