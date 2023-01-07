import dotenv from "dotenv";
dotenv.config();

export const nodeConfig = {
  env: process.env.NODE_ENV,
  port: process.env.NODE_PORT,
};
