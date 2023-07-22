import dotenv from "dotenv";
dotenv.config();

export const Node_Config = {
  env: process.env.Node_Env,
  port: process.env.Node_Port,
};
