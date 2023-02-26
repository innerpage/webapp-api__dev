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
  let isSuccess_CreateAccount: boolean = false;
  let payload: any;
  let err: any;
  let returnObj: LooseObj = {};

  await model_Account
    .create({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      persona: "",
    })
    .then((newAccount: any) => {
      console.log("New account CREATED");
      isSuccess_CreateAccount = true;
      payload = newAccount.dataValues.id;
    })
    .catch((err) => {
      console.log("New account NOT_CREATED");
      console.log(err);
      err = err;
    });

  if (isSuccess_CreateAccount) {
    returnObj.success = true;
    returnObj.message = "Account created";
    returnObj.payload = payload;
  } else {
    returnObj.success = false;
    returnObj.message = "Could not create account";
    returnObj.payload = err;
  }

  return returnObj;
};
