import { SessionOptions } from "express-session";
import { Node_Config } from "..";
import dotenv from "dotenv";
dotenv.config();

export const ExpressSession_Config: SessionOptions = {
  secret: process.env.Express_Session_Secret!,
  name: process.env.Express_Session_Name,
  cookie: {
    maxAge: +process.env.ExpressSession_Timeout!,
    secure: Node_Config.env === "prod" ? true : false,
    sameSite: Node_Config.env === "prod" ? "none" : "lax",
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: false,
};
