import dotenv from "dotenv";
import { VarInterface } from "../interfaces";
dotenv.config();

export const Var: VarInterface = {
  app: {
    name: process.env.APP_NAME!,
    contact: {
      email: process.env.APP_CONTACT_EMAIL!,
      url: process.env.APP_CONTACT_URL!,
    },
    domain: process.env.APP_DOMAIN!,
    emoji: {
      success: "✅",
      failure: "❌",
      warning: "⚠️",
    },
    url: {
      dev: process.env.APP_URL_DEV!,
      prod: process.env.APP_URL_PROD!,
    },
    website: {
      url: process.env.APP_WEBSITE_URL!,
    },
    owner: {
      name: process.env.OWNER_NAME!,
      website: {
        url: process.env.OWNER_WEBSITE_URL!,
      },
      contact: {
        address: process.env.OWNER_CONTACT_ADDRESS!,
        email: process.env.OWNER_CONTACT_EMAIL!,
      },
    },
  },
  redis: {
    host: process.env.REDIS_HOST!,
    port: process.env.REDIS_PORT!,
  },
  postgres: {
    host: process.env.POSTGRES_HOST!,
    database: process.env.POSTGRES_DATABASE!,
    user: process.env.POSTGRES_USER!,
    password: process.env.POSTGRES_PASSWORD!,
  },
  node: {
    env: process.env.NODE_ENV!,
    port: Number(process.env.NODE_PORT),
    express: {
      session: {
        secret: process.env.EXPRESS_SESSION_SECRET!,
        name: process.env.EXPRESS_SESSION_NAME!,
        maxAge: process.env.EXPRESS_SESSION_TIMEOUT!,
      },
    },
  },
};
