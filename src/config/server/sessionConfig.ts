import { SessionOptions } from "express-session";
import { nodeConfig } from "../../config";
import dotenv from "dotenv";
dotenv.config();

// Final
export const sessionConfig: SessionOptions = {
  secret: process.env.SESSION_SECRET!,
  name: process.env.SESSION_NAME,
  cookie: {
    maxAge: +process.env.SESSION_TIMEOUT!,
    secure: nodeConfig.env === "prod" ? true : false,
    sameSite: process.env.NODE_ENV === "prod" ? "none" : "lax",
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: true,
};

// export const sessionConfig: SessionOptions = {
//   secret: process.env.SESSION_SECRET!,
//   name: process.env.SESSION_NAME,
//   cookie: {
//     secure: isSecure,
//     sameSite: process.env.NODE_ENV === "prod" ? "none" : "lax",
//     httpOnly: true,
//     maxAge: +process.env.SESSION_TIMEOUT!,
//   },
//   proxy: process.env.NODE_ENV === "prod",
//   resave: false,
//   saveUninitialized: true,
// };
