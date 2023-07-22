import { model_Account } from "../../models";

export const dal_Account_Read_By_Email = async (email: string) => {
  const account = await model_Account.findOne({
    where: {
      email: email,
    },
  });

  return account;
};
