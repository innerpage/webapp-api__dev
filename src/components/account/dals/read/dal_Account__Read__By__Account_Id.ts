import { model__Account } from "../../models";

export const dal_Account__Read__By__Account_Id = async (id_Account: string) => {
  const account = await model__Account.findOne({
    where: {
      id: id_Account,
    },
  });

  return account;
};
