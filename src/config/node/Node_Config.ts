import dotenv from "dotenv";
dotenv.config();

export const Node_Config = {
  env: process.env.NODE_ENV,
  port: process.env.NODE_PORT,
};
