import dotenv from "dotenv";
dotenv.config();

export const Stripe_Config = {
  public_Key: process.env.STRIPE_PUBLIC_KEY || "",
  secret_Key: process.env.STRIPE_SECRET_KEY || "",
  webhook_Secret: process.env.STRIPE_WEBHOOK_SECRET || "",
  processing_Fee: process.env.STRIPE_PROCESSING_FEE || "",
};
