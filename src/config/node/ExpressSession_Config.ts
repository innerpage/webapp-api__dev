import { SessionOptions } from "express-session";
import { Node_Config } from "..";
import dotenv from "dotenv";
dotenv.config();

export const ExpressSession_Config: SessionOptions = {
  secret: process.env.ExpressSession_Secret!,
  name: process.env.ExpressSession_Name,
  cookie: {
    maxAge: +process.env.ExpressSession_TImeout!,
    secure: Node_Config.env === "prod" ? true : false,
    sameSite: Node_Config.env === "prod" ? "none" : "lax",
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: false,
};
