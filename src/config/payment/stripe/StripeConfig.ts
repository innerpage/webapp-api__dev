import dotenv from "dotenv";
dotenv.config();

export const StripeConfig = {
  publicKey: process.env.STRIPE_PUBLIC_KEY || "",
  secretKey: process.env.STRIPE_SECRET_KEY || "",
  webhookSecret: process.env.STRIPE_WEBHOOK_SECRET || "",
  processingFee: process.env.STRIPE_PROCESSING_FEE || "",
};
