import { SessionOptions } from "express-session";
import { config__Node } from "..";
import dotenv from "dotenv";
dotenv.config();

export const config__Session: SessionOptions = {
  secret: process.env.SESSION_SECRET!,
  name: process.env.SESSION_NAME,
  cookie: {
    maxAge: +process.env.SESSION_TIMEOUT!,
    secure: config__Node.env === "prod" ? true : false,
    sameSite: config__Node.env === "prod" ? "none" : "lax",
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: false,
};
