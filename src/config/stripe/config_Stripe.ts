import dotenv from "dotenv";
dotenv.config();

export const config_Stripe = {
    key_Public: process.env.PUBLIC_KEY || "",
    key_Secret: process.env.SECRET_KEY || "",
    secret_Webhook: process.env.WEBHOOK_SECRET || "",
    fee_Processing: process.env.PROCESSING_FEE || ""
}