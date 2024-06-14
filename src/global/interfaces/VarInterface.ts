export interface VarInterface {
  app: {
    name: string;
    contact: {
      email: string;
      url: string;
    };
    domain: string;
    emoji: {
      success: string;
      failure: string;
      warning: string;
    };
    url: {
      dev: string;
      prod: string;
    };
    website: {
      url: string;
    };
    owner: {
      name: string;
      website: {
        url: string;
      };
      contact: {
        address: string;
        email: string;
      };
    };
    paymentGateway: string;
  };
  redis: {
    host: string;
    port: string;
  };
  postgres: {
    host: string;
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
