import dotenv from "dotenv";
dotenv.config();

const isSecure: boolean = process.env.APP_ENV === "prod" ? true : false;

export const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  name: process.env.SESSION_NAME,
  cookie: {
    maxAge: process.env.SESSION_TIMEOUT,
    secure: isSecure,
    sameSite: true,
  },
  resave: false,
  saveUninitialized: false,
};
