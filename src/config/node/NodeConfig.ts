import dotenv from "dotenv";
dotenv.config();

export const NodeConfig = {
  env: process.env.NODE_ENV,
  port: process.env.NODE_PORT,
};
