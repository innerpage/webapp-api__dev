import { model_Account } from "../../models";

export const dal_GetAccount_ByEmail = async (email: string) => {
  const account = await model_Account.findOne({
    where: {
      email: email,
    },
  });

  return account;
};
