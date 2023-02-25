import { model_Account } from "../../models";

export const dal_Create_Account = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  await model_Account
    .create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    })
    .then((newAccount: any) => {
      console.log("New account CREATED");
      return {
        isCreated_Account: true,
        message: "Account created",
        payload: newAccount,
      };
    })
    .catch((err) => {
      console.log("New account NOT_CREATED");
      return {
        isCreated_Account: false,
        message: "Could not create account",
        payload: err,
      };
    });
};
