import { ApiVarInterface } from "../interfaces/ApiVarInterface";

export const ApiVar: ApiVarInterface = {
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
};
