import { model_Account } from "../../models";

interface LooseObj {
  [key: string]: any;
}

export const dal_Account_Write_NewAccount = async (
  name_First: string,
  name_Last: string,
  email: string,
  password: string,
  code_EmailVerification: number
) => {
  let isSuccess_NewAccount: boolean = false;
  let payload: any;
  let obj_Return: LooseObj = {};

  await model_Account
    .create({
      first_name: name_First,
      last_name: name_Last,
      email: email,
      password: password,
      email_verification_code: code_EmailVerification,
    })
    .then((new_Account: any) => {
      isSuccess_NewAccount = true;
      payload = {
        id: new_Account.dataValues.id,
        name_First: new_Account.dataValues.first_name,
        name_Last: new_Account.dataValues.last_name,
        email: new_Account.dataValues.email,
        isPublisher: new_Account.dataValues.is_publisher,
        isVerified_Email: new_Account.dataValues.is_email_verified,
        email_VerificationCode: new_Account.dataValues.email_verification_code,
      };
    })
    .catch((err) => {
      payload = err;
    });

  if (isSuccess_NewAccount) {
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
