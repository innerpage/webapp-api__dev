export interface ApiVarInterface {
  url: string;
  endpoint: {
    account: {
      details: {
        get: string;
        update: string;
      };
      auth: {
        login: string;
        logout: string;
        signup: string;
        oauth: {
          google: string;
        };
      };
      password: {
        update: string;
      };
    };
    mail: {
      verificationLink: string;
    };
    payment: {
      stripe: {
        session: {
          create: string;
          check: string;
        };
        price: {
          get: string;
        };
      };
    };
  };
}
