import { model_Account } from "../../models";

interface ReturnObj {
  isCreated_Account: boolean;
  message: string;
  payload: object;
}

export const dal_Create_Account = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  let returnObj: ReturnObj;

  await model_Account
    .create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    })
    .then((newAccount: any) => {
      returnObj.isCreated_Account = true;
      returnObj.message = "Account created";
      returnObj.payload = newAccount;
      return returnObj;
    })
    .catch((err) => {
      returnObj.isCreated_Account = false;
      returnObj.message = "Could not create account";
      returnObj.payload = err;
      return returnObj;
    });
};
