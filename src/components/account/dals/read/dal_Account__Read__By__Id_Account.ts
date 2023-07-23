import { accountModel } from "../../models";

export const dal_Account_Read_By_Id_Account = async (accountId: string) => {
  const account = await accountModel.findOne({
    where: {
      id: accountId,
    },
  });

  return account;
};
