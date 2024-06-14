import { accountModel } from "../../models";
import { Var } from "../../../../global/var";

export const writeNewAccount = async (
  name: string,
  email: string,
  hashedPassword: string,
  verificationCode: string
) => {
  let isSuccessful: boolean = false;
  let returnData: any;

  await accountModel
    .create({
      name: name,
      email: email,
      password: hashedPassword,
      verification_code: verificationCode,
    })
    .then((newAccount: any) => {
      isSuccessful = true;
      returnData = {
        id: newAccount.dataValues.id,
        name: newAccount.dataValues.name,
        email: newAccount.dataValues.email,
        isEmailVerified: newAccount.dataValues.is_email_verified,
        verificationCode: newAccount.dataValues.verification_code,
      };
    })
    .catch((err: any) => {
      returnData = err;
    });

  return {
    success: isSuccessful,
    message: isSuccessful
      ? `${Var.app.emoji.success} New account created`
      : `${Var.app.emoji.failure} Could not create account. Please contact ${Var.app.contact.email}`,
    payload: returnData,
  };
};
