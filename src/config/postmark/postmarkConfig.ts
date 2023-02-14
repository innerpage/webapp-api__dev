import dotenv from "dotenv";
dotenv.config();

export const postmarkConfig = {
  token: process.env.POSTMARK_TOKEN,
};
