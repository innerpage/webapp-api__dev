import dotenv from "dotenv";
dotenv.config();

export const config_Node = {
  env: process.env.NODE_ENV,
  port: process.env.NODE_PORT,
};
