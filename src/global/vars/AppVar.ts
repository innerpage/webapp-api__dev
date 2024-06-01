import dotenv from "dotenv";
import { AppVarInterface } from "../interfaces";
dotenv.config();

export const AppVar: AppVarInterface = {
  app: {
    name: process.env.APP_NAME!,
    contact: {
      email: process.env.APP_EMAIL!,
      url: process.env.APP_SUPPORT_URL!,
    },
    session: {
      key: process.env.APP_SESSION_KEY!,
    },
    domain: process.env.APP_DOMAIN!,
    url: {
      dev: process.env.APP_URL_DEV!,
      prod: process.env.APP_URL_PROD!,
    },
    website: {
      url: process.env.APP_WEBSITE_URL!,
    },
    policy: {
      tos: {
        url: process.env.APP_TOS_URL!,
      },
      privacy: {
        url: process.env.APP_PRIVACY_POLICY_URL!,
      },
      cancellationAndRefund: {
        url: process.env.APP_CANCELLATION_AND_REFUND_POLICY_URL!,
      },
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
  api: {
    url: "",
    endpoint: {
      account: {
        details: {
          get: "",
          update: "",
        },
        auth: {
          login: "",
          logout: "",
          signup: "",
          oauth: {
            google: "",
          },
        },
        password: {
          update: "",
        },
      },
      mail: {
        verificationLink: "",
      },
      payment: {
        stripe: {
          session: {
            create: "",
            check: "",
          },
          price: {
            get: "",
          },
        },
      },
    },
  },
  redis: {
    host: process.env.REDIS_HOST!,
    port: process.env.REDIS_PORT!,
  },
  postgres: {
    host: process.env.POSTGRES_HOST!,
    port: process.env.POSTGRES_PORT!,
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
