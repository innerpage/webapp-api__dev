import { accountModel } from "../../models";

export const dal_Account_Read_By_Email = async (email: string) => {
  const account = await accountModel.findOne({
    where: {
      email: email,
    },
  });

  return account;
};
