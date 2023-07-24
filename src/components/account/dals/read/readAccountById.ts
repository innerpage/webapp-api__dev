import { accountModel } from "../../models";

export const readAccountById = async (accountId: string) => {
  const account = await accountModel.findOne({
    where: {
      id: accountId,
    },
  });

  return account;
};
