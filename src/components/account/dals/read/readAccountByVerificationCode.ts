import { accountModel } from "../../models";

export const readAccountByVerificationCode = async (
  verificationCode: string
) => {
  const account = await accountModel.findOne({
    where: {
      verification_code: verificationCode,
    },
  });

  return account;
};
