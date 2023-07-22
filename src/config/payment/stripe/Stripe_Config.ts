import dotenv from "dotenv";
dotenv.config();

export const Stripe_Config = {
  public_Key: process.env.Stripe_Public_Key || "",
  secret_Key: process.env.Stripe_Secret_Key || "",
  webhook_Secret: process.env.Stripe_Webhook_Secret || "",
  processing_Fee: process.env.Stripe_Processing_Fee || "",
};
