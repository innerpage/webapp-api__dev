import { model__Account } from "../../models";

export const dal_Account_Read_By_Email = async (email: string) => {
  const account = await model__Account.findOne({
    where: {
      email: email,
    },
  });

  return account;
};
