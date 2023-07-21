import { SessionOptions } from "express-session";
import { config__Node } from "..";
import dotenv from "dotenv";
dotenv.config();

export const config__Express_Session: SessionOptions = {
  secret: process.env.EXPRESS_SESSION_SECRET!,
  name: process.env.EXPRESS_SESSION_NAME,
  cookie: {
    maxAge: +process.env.EXPRESS_SESSION_TIMEOUT!,
    secure: config__Node.env === "prod" ? true : false,
    sameSite: config__Node.env === "prod" ? "none" : "lax",
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: false,
};
