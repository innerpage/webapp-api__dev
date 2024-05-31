import dotenv from "dotenv";
dotenv.config();

export const Vars = {
  app: {
    name: process.env.APP_NAME || "",
    support: {
      email: process.env.APP_EMAIL || "",
      url: process.env.APP_SUPPORT_URL || "",
    },
    session: {
      key: process.env.APP_SESSION_KEY || "",
    },
    domain: process.env.APP_DOMAIN || "",
    url: {
      dev: process.env.APP_URL_DEV || "",
      prod: process.env.APP_URL_PROD || "",
    },
    website: {
      url: process.env.APP_WEBSITE_URL || "",
    },
    policy: {
      tos: {
        url: process.env.APP_TOS_URL || "",
      },
      privacy: {
        url: process.env.APP_PRIVACY_POLICY_URL || "",
      },
      cancellationAndRefund: {
        url: process.env.APP_CANCELLATION_AND_REFUND_POLICY_URL || "",
      },
    },
    paymentGateway: process.env.APP_PAYMENT_GATEWAY,
  },
  business: {
    name: process.env.BUSINESS_NAME || "",
    website: {
      url: process.env.BUSINESS_WEBSITE_URL,
    },
    address: process.env.BUSINESS_ADDRESS || "",
    email: process.env.BUSINESS_EMAIL,
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT!,
  },
  postgres: {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
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
    env: process.env.NODE_ENV,
    port: process.env.NODE_PORT,
    express: {
      session: {
        secret: process.env.EXPRESS_SESSION_SECRET,
        name: process.env.EXPRESS_SESSION_NAME,
        maxAge: process.env.EXPRESS_SESSION_TIMEOUT,
      },
    },
  },
  stripe: {
    publicKey: process.env.STRIPE_PUBLIC_KEY || "",
    secretKey: process.env.STRIPE_SECRET_KEY || "",
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET || "",
    processingFee: process.env.STRIPE_PROCESSING_FEE || "",
  },
};
