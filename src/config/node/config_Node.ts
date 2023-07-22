import dotenv from "dotenv";
dotenv.config();

export const config_Node = {
  env: process.env.Node_Env,
  port: process.env.Node_Port,
};
