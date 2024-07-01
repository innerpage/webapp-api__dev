import { accountModel } from "../../models";

export const readAllAccountsCount = async () => {
  const accountsCount = await accountModel.findAndCountAll();

  return accountsCount;
};
