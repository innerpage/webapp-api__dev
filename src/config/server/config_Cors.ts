import { config_App } from "..";

export const config_Cors = {
  origin: [`${config_App.url_Base_App}`],
  credentials: true,
};
