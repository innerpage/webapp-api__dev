import { Var } from "../../../../global/var";
import { accountModel } from "../../models";

export const writeNewName = async (email: string, newName: string) => {
  let isSuccessful: boolean = false;
  let returnData: any;

  await accountModel
    .update(
      { name: newName },
      {
        where: {
          email: email,
        },
      }
    )
    .then((updatedAccount: any) => {
      isSuccessful = true;
      returnData = updatedAccount;
    })
    .catch((err: any) => (returnData = err));

  return {
    success: isSuccessful,
    message: isSuccessful
      ? `${Var.app.emoji.success} Name updated`
      : `${Var.app.emoji.failure} Failed to update name. Please contact ${Var.app.contact.email}`,
    payload: isSuccessful ? { newName: newName } : returnData,
  };
};
