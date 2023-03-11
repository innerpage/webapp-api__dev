import { SessionOptions } from "express-session";
import { nodeConfig } from "../../config";
import dotenv from "dotenv";
dotenv.config();

export const sessionConfig: SessionOptions = {
  secret: process.env.SESSION_SECRET!,
  name: process.env.SESSION_NAME,
  cookie: {
    maxAge: +process.env.SESSION_TIMEOUT!,
    secure: nodeConfig.env === "prod" ? true : false,
    sameSite: nodeConfig.env === "prod" ? "none" : "lax",
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: false,
};
