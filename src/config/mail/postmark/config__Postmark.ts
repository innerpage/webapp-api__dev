import dotenv from "dotenv";
dotenv.config();

export const config__Postmark = {
  token: process.env.POSTMARK_TOKEN!,
};
