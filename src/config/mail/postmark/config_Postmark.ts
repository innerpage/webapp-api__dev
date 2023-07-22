import dotenv from "dotenv";
dotenv.config();

export const config_Postmark = {
  token: process.env.POSTMARK_TOKEN!,
};
