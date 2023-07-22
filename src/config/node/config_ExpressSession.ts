import { SessionOptions } from "express-session";
import { config_Node } from "..";
import dotenv from "dotenv";
dotenv.config();

export const config_ExpressSession: SessionOptions = {
  secret: process.env.ExpressSession_Secret!,
  name: process.env.ExpressSession_Name,
  cookie: {
    maxAge: +process.env.ExpressSession_TImeout!,
    secure: config_Node.env === "prod" ? true : false,
    sameSite: config_Node.env === "prod" ? "none" : "lax",
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: false,
};
