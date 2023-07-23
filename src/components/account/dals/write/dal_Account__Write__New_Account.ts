import { accountModel } from "../../models";

interface obj_Loose {
  [key: string]: any;
}

export const dal_Account_Write_New_Account = async (
  name_First: string,
  name_Last: string,
  email: string,
  hashed_Password: string,
  code_Email_Verification: number
) => {
  let isSuccess_NewAccount: boolean = false;
  let payload: any;
  let returnObject: obj_Loose = {};

  await accountModel
    .create({
      first_name: name_First,
      last_name: name_Last,
      email: email,
      password: hashed_Password,
      email_verification_code: code_Email_Verification,
    })
    .then((new_Account: any) => {
      isSuccess_NewAccount = true;
      payload = {
        id: new_Account.dataValues.id,
        name_First: new_Account.dataValues.first_name,
        name_Last: new_Account.dataValues.last_name,
        email: new_Account.dataValues.email,
        isVerified_Email: new_Account.dataValues.is_email_verified,
        code_Email_Verification: new_Account.dataValues.email_verification_code,
      };
    })
    .catch((err) => {
      payload = err;
    });

  if (isSuccess_NewAccount) {
    returnObject.success = true;
    returnObject.message = "New account CREATED";
    returnObject.payload = payload;
  } else {
    returnObject.success = false;
    returnObject.message = "New account NOT_CREATED";
    returnObject.payload = payload;
  }

  return returnObject;
};
