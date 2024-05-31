export interface ConfigVarInterface {
  app: {
    name: string;
    contact: {
      email: string;
      url: string;
    };
    session: {
      key: string;
    };
    domain: string;
    url: {
      dev: string;
      prod: string;
    };
    website: {
      url: string;
    };
    policy: {
      tos: { url: string };
      privacy: { url: string };
      cancellationAndRefund: { url: string };
    };
    paymentGateway: string;
  };
  business: {
    name: string;
    website: {
      url: string;
    };
    contact: {
      address: string;
      email: string;
    };
  };
  redis: {
    host: string;
    port: string;
  };
  postgres: {
    host: string;
    port: string;
    database: string;
    user: string;
    password: string;
  };
  postmark: {
    token: string;
    template: {
      accountChangeConfirmation: {
        id: number;
      };
      emailVerificationLink: {
        id: number;
      };
      passwordResetLink: {
        id: number;
      };
    };
  };
  node: {
    env: string;
    port: number;
    express: {
      session: {
        secret: string;
        name: string;
        maxAge: string;
      };
    };
  };
  stripe: {
    key: {
      public: string;
      secret: string;
    };
    webhook: {
      secret: string;
    };
    fee: {
      processing: {
        percentage: number;
      };
    };
  };
}
