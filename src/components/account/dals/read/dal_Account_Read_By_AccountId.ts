import { model__Account } from "../../models";

export const dal_Account_Read_By_AccountId = async (id_Account: string) => {
  const account = await model__Account.findOne({
    where: {
      id: id_Account,
    },
  });

  return account;
};
