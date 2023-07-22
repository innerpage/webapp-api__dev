import { SessionOptions } from "express-session";
import { config_Node } from "..";
import dotenv from "dotenv";
dotenv.config();

export const config_ExpressSession: SessionOptions = {
  secret: process.env.EXPRESS_SESSION_SECRET!,
  name: process.env.EXPRESS_SESSION_NAME,
  cookie: {
    maxAge: +process.env.EXPRESS_SESSION_TIMEOUT!,
    secure: config_Node.env === "prod" ? true : false,
    sameSite: config_Node.env === "prod" ? "none" : "lax",
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: false,
};
