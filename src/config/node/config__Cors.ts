import { config__App } from "..";

export const config__Cors = {
  origin: [`${config__App.url__App}`],
  credentials: true,
};
