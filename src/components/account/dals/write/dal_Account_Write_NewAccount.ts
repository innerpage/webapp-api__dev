import { model_Account } from "../../models";

interface LooseObj {
  [key: string]: any;
}

export const dal_Account_Write_NewAccount = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  code_EmailVerification: number
) => {
  let isSuccess_CreateAccount: boolean = false;
  let payload: any;
  let obj_Return: LooseObj = {};

  await model_Account
    .create({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      email_verification_code: code_EmailVerification,
    })
    .then((new_Account: any) => {
      isSuccess_CreateAccount = true;
      payload = {
        id: new_Account.dataValues.id,
        firstName: new_Account.dataValues.first_name,
        email: new_Account.dataValues.email,
        email_VerificationCode: new_Account.dataValues.email_verification_code,
      };
    })
    .catch((err) => {
      payload = err;
    });

  if (isSuccess_CreateAccount) {
    obj_Return.success = true;
    obj_Return.message = "New account CREATED";
    obj_Return.payload = payload;
  } else {
    obj_Return.success = false;
    obj_Return.message = "New account NOT_CREATED";
    obj_Return.payload = payload;
  }

  return obj_Return;
};
