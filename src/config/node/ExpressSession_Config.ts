import { SessionOptions } from "express-session";
import { NodeConfig } from "..";
import dotenv from "dotenv";
dotenv.config();

export const ExpressSession_Config: SessionOptions = {
  secret: process.env.EXPRESS_SESSION_SECRET!,
  name: process.env.EXPRESS_SESSION_NAME,
  cookie: {
    maxAge: +process.env.EXPRESS_SESSION_TIMEOUT!,
    secure: NodeConfig.env === "prod" ? true : false,
    sameSite: NodeConfig.env === "prod" ? "none" : "lax",
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: false,
};
