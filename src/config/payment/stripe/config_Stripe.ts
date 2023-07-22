import dotenv from "dotenv";
dotenv.config();

export const config_Stripe = {
  key_Public: process.env.Stripe_PublicKey || "",
  key_Secret: process.env.Stripe_SecretKey || "",
  secret_Webhook: process.env.Stripe_WebhookSecret || "",
  fee_Processing: process.env.Stripe_ProcessingFee || "",
};
