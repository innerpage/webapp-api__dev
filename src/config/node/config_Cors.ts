import { config_App } from "..";

export const config_Cors = {
  origin: [`${config_App.url__App}`],
  credentials: true,
};
