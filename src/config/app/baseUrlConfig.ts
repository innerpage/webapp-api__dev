import dotenv from "dotenv";
dotenv.config();

export const baseUrlConfig = {
  url:
    process.env.NODE_ENV === "dev"
      ? `http:localhost:${process.env.NODE_PORT}`
      : `https://app.vitalwidgets.com`,
};
