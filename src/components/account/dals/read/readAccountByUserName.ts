import { accountModel } from "../../models";

export const readAccountByUserName = async (userName: string) => {
  const account = await accountModel.findOne({
    where: {
      user_name: userName,
    },
  });

  return account;
};
