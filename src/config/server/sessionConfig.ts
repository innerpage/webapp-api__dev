import { SessionOptions } from "express-session";
import dotenv from "dotenv";
dotenv.config();

const isSecure: boolean = process.env.NODE_ENV === "dev" ? false : true;

export const sessionConfig: SessionOptions = {
  secret: process.env.SESSION_SECRET!,
  name: process.env.SESSION_NAME,
  cookie: {
    maxAge: +process.env.SESSION_TIMEOUT!,
    secure: isSecure,
    sameSite: true,
  },
  resave: false,
  saveUninitialized: false,
};
