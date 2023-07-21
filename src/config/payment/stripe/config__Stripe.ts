import dotenv from "dotenv";
dotenv.config();

export const config__Stripe = {
  key__Public: process.env.STRIPE_PUBLIC_KEY || "",
  key__Secret: process.env.STRIPE_SECRET_KEY || "",
  secret__Webhook: process.env.STRIPE_WEBHOOK_SECRET || "",
  fee__Processing: process.env.STRIPE_PROCESSING_FEE || "",
};
