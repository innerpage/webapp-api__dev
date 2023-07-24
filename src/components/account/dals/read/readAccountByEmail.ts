import { accountModel } from "../../models";

export const readAccountByEmail = async (email: string) => {
  const account = await accountModel.findOne({
    where: {
      email: email,
    },
  });

  return account;
};
