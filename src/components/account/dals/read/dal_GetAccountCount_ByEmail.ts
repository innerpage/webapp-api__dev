import { model_Account } from "../../models";

export const dal_GetAccountCount_ByEmail = async (email: string) => {
  const { count } = await model_Account.findAndCountAll({
    where: {
      email: email,
    },
    offset: 10,
    limit: 2,
  });

  return count;
};
