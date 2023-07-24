import { accountModel } from "../../models";

export const writeNewAccount = async (
  firstName: string,
  lastName: string,
  email: string,
  hashedPassword: string,
  emailVerificationCode: number
) => {
  let isNewAccountCreated: boolean = false;
  let payload: any;

  await accountModel
    .create({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: hashedPassword,
      email_verification_code: emailVerificationCode,
    })
    .then((newAccount: any) => {
      isNewAccountCreated = true;
      payload = {
        id: newAccount.dataValues.id,
        firstName: newAccount.dataValues.first_name,
        lastName: newAccount.dataValues.last_name,
        email: newAccount.dataValues.email,
        isEmailVerified: newAccount.dataValues.is_email_verified,
        emailVerificationCode: newAccount.dataValues.email_verification_code,
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
