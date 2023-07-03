import dotenv from "dotenv";
import { Var_App } from "../../global/vars";
dotenv.config();

export const config_BaseUrl = {
  url:
    process.env.NODE_ENV === "dev"
      ? `http:localhost:${process.env.NODE_PORT}`
      : `https://${Var_App.url_App_Product}`,
};
