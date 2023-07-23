import { AppConfig } from "..";

export const CorsConfig = {
  origin: [`${AppConfig.appUrl}`],
  credentials: true,
};
