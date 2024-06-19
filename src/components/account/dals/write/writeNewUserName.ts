import { Var } from "../../../../global/var";
import { accountModel } from "../../models";

export const writeNewUserName = async (
  accountId: string,
  newUserName: string
) => {
  let isSuccessful: boolean = false;
  let returnData: any;

  await accountModel
    .update(
      { user_name: newUserName },
      {
        where: {
          id: accountId,
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
    payload: isSuccessful ? { newUserName: newUserName } : returnData,
  };
};
