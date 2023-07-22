import { model_Account } from "../../models";

export const dal_Account_Read_By_Id_Account = async (id_Account: string) => {
  const account = await model_Account.findOne({
    where: {
      id: id_Account,
    },
  });

  return account;
};
