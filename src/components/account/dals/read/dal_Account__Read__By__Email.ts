import { model_Account } from "../../models";

export const dal_Account__Read__By__Email = async (email: string) => {
  const account = await model_Account.findOne({
    where: {
      email: email,
    },
  });

  return account;
};
