import { accountModel } from "../../models";
import { Var } from "../../../../global/var";

export const writeNewAccount = async (
  userName: string,
  hashedPassword: string
) => {
  let isSuccessful: boolean = false;
  let returnData: any;

  await accountModel
    .create({
      user_name: userName,
      password: hashedPassword,
    })
    .then((newAccount: any) => {
      isSuccessful = true;
      returnData = {
        id: newAccount.dataValues.id,
        userName: newAccount.dataValues.name,
      };
    })
    .catch((err: any) => {
      returnData = err;
    });

  return {
    success: isSuccessful,
    message: isSuccessful
      ? `${Var.app.emoji.success} New account created`
      : `${Var.app.emoji.failure} Could not create account. Please contact ${Var.app.contact.email}`,
    payload: returnData,
  };
};
