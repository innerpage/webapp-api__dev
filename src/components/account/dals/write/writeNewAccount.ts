import { accountModel } from "../../models";
import { Vars } from "../../../../global/vars";

export const writeNewAccount = async (
  name: string,
  email: string,
  hashedPassword: string,
  verificationCode: string
) => {
  let isNewAccountCreated: boolean = false;
  let payload: any;

  await accountModel
    .create({
      name: name,
      email: email,
      password: hashedPassword,
      verification_code: verificationCode,
    })
    .then((newAccount: any) => {
      isNewAccountCreated = true;
      payload = {
        id: newAccount.dataValues.id,
        name: newAccount.dataValues.name,
        email: newAccount.dataValues.email,
        isEmailVerified: newAccount.dataValues.is_email_verified,
        verificationCode: newAccount.dataValues.verification_code,
      };
    })
    .catch((err) => {
      payload = err;
    });

  if (!isNewAccountCreated) {
    return {
      success: false,
      message: `❌ Could not create account. Please contact ${Vars.app.support.email}`,
      payload: payload,
    };
  }

  return {
    success: true,
    message: "✅ New account created",
    payload: payload,
  };
};
