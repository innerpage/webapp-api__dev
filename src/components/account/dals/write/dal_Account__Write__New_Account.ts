import { model_Account } from "../../models";

interface LooseObj {
  [key: string]: any;
}

export const dal_Account__Write__New_Account = async (
  name__First: string,
  name__Last: string,
  email: string,
  hashed__Password: string,
  code__Email_Verification: number
) => {
  let isSuccess_NewAccount: boolean = false;
  let payload: any;
  let obj_Return: LooseObj = {};

  await model_Account
    .create({
      first_name: name__First,
      last_name: name__Last,
      email: email,
      password: hashed__Password,
      email_verification_code: code__Email_Verification,
    })
    .then((new_Account: any) => {
      isSuccess_NewAccount = true;
      payload = {
        id: new_Account.dataValues.id,
        name__First: new_Account.dataValues.first_name,
        name__Last: new_Account.dataValues.last_name,
        email: new_Account.dataValues.email,
        is_Verified__Email: new_Account.dataValues.is_email_verified,
        code__Email_Verification:
          new_Account.dataValues.email_verification_code,
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
