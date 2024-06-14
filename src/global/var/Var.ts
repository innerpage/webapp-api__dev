import dotenv from "dotenv";
import { VarInterface } from "../interfaces";
dotenv.config();

export const Var: VarInterface = {
  app: {
    name: process.env.APP_NAME!,
    contact: {
      email: process.env.APP_EMAIL!,
      url: process.env.APP_SUPPORT_URL!,
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
      name: process.env.BUSINESS_NAME!,
      website: {
        url: process.env.BUSINESS_WEBSITE_URL!,
      },
      contact: {
        address: process.env.BUSINESS_ADDRESS!,
        email: process.env.BUSINESS_EMAIL!,
      },
    },
    paymentGateway: process.env.APP_PAYMENT_GATEWAY!,
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
  postmark: {
    token: process.env.POSTMARK_TOKEN!,
    template: {
      accountChangeConfirmation: {
        id: parseInt(
          process.env.POSTMARK_TEMPLATE_ACCOUNT_CHANGE_CONFIRMATION!
        ),
      },
      emailVerificationLink: {
        id: parseInt(process.env.POSTMARK_TEMPLATE_EMAIL_VERIFICATION_LINK!),
      },
      passwordResetLink: {
        id: parseInt(process.env.POSTMARK_TEMPLATE_PASSWORD_RESET_LINK!),
      },
    },
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
  stripe: {
    key: {
      public: process.env.STRIPE_PUBLIC_KEY!,
      secret: process.env.STRIPE_SECRET_KEY!,
    },
    webhook: {
      secret: process.env.STRIPE_WEBHOOK_SECRET!,
    },
    fee: {
      processing: {
        percentage: Number(process.env.STRIPE_PROCESSING_FEE),
      },
    },
  },
};
