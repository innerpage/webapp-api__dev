import { SessionOptions } from "express-session";
import { Node_Config } from "..";
import dotenv from "dotenv";
dotenv.config();

export const ExpressSession_Config: SessionOptions = {
  secret: process.env.EXPRESS_SESSION_SECRET!,
  name: process.env.EXPRESS_SESSION_NAME,
  cookie: {
    maxAge: +process.env.ExpressSession_Timeout!,
    secure: Node_Config.env === "prod" ? true : false,
    sameSite: Node_Config.env === "prod" ? "none" : "lax",
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: false,
};
