import { model_Account } from "../../models";

interface LooseObj {
  [key: string]: any;
}

export const dal_Create_Account = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  let responseObj: LooseObj = {};

  await model_Account
    .create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    })
    .then((newAccount: any) => {
      responseObj.success = true;
      responseObj.message = "Account created";
      responseObj.payload = newAccount;
    })
    .catch((err) => {
      responseObj.success = false;
      responseObj.message = "Could not create account";
    });

  return responseObj;
};
