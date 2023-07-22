import { config_App } from "..";

export const config_Cors = {
  origin: [`${config_App.App_Url}`],
  credentials: true,
};
