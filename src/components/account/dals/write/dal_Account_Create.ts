import { model_Account } from "../../models";

interface LooseObj {
  [key: string]: any;
}

export const dal_Account_Create = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  code_EmailVerification: number
) => {
  let isSuccess_CreateAccount: boolean = false;
  let payload: any;
  let returnObj: LooseObj = {};

  await model_Account
    .create({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      email_verification_code: code_EmailVerification,
    })
    .then((newAccount: any) => {
      isSuccess_CreateAccount = true;
      payload = {
        id: newAccount.dataValues.id,
        firstName: newAccount.dataValues.first_name,
        email: newAccount.dataValues.email,
        email_VerificationCode: newAccount.dataValues.email_verification_code,
      };
    })
    .catch((err) => {
      payload = err;
    });

  if (isSuccess_CreateAccount) {
    returnObj.success = true;
    returnObj.message = "New account CREATED";
    returnObj.payload = payload;
  } else {
    returnObj.success = false;
    returnObj.message = "New account NOT_CREATED";
    returnObj.payload = payload;
  }

  return returnObj;
};
