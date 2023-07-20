import dotenv from "dotenv";
dotenv.config();

export const config__Node = {
  env: process.env.NODE_ENV,
  port: process.env.NODE_PORT,
};
