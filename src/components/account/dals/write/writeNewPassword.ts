import { Var } from "../../../../global/var";
import { accountModel } from "../../models";

export const writeNewPassword = async (
  email: string,
  newHashedPassword: string
) => {
  let isSuccessful: boolean = false;
  let returnData: any;

  await accountModel
    .update(
      { password: newHashedPassword, verification_code: "" },
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
      ? `${Var.app.emoji.success} Password updated`
      : `${Var.app.emoji.failure} Failed to update password. Please contact ${Var.app.contact.email}`,
    payload: returnData,
  };
};
