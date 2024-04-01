import { accountModel } from "../../models";

export const writeNewAccount = async (
  name: string,
  email: string,
  hashedPassword: string,
  emailVerificationCode: string
) => {
  let isNewAccountCreated: boolean = false;
  let payload: any;

  await accountModel
    .create({
      name: name,
      email: email,
      password: hashedPassword,
      verification_code: emailVerificationCode,
    })
    .then((newAccount: any) => {
      isNewAccountCreated = true;
      payload = {
        id: newAccount.dataValues.id,
        name: newAccount.dataValues.name,
        email: newAccount.dataValues.email,
        isEmailVerified: newAccount.dataValues.is_email_verified,
        emailVerificationCode: newAccount.dataValues.verification_code,
      };
    })
    .catch((err) => {
      payload = err;
    });

  if (isNewAccountCreated) {
    return {
      success: true,
      message: "New account created",
      payload: payload,
    };
  } else {
    return {
      success: false,
      message: "New account not created",
      payload: payload,
    };
  }
};
