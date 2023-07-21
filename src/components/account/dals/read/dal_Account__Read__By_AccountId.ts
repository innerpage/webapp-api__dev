import { model__Account } from "../../models";

export const dal_Account__Read__By__AccountId = async (id__Account: string) => {
  const account = await model__Account.findOne({
    where: {
      id: id__Account,
    },
  });

  return account;
};
