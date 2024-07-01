import { deletedAccountModel } from "../../models";

export const readAllDeletedAccountsCount = async () => {
  const deletedAccountsCount = await deletedAccountModel.findAndCountAll();

  return deletedAccountsCount;
};
