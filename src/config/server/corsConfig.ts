import { baseUrlConfig } from "../";

export const corsConfig = {
  origin: [baseUrlConfig.url],
  credentials: true,
};
