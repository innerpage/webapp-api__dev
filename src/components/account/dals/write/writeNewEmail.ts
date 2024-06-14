import { Var } from "../../../../global/var";
import { accountModel } from "../../models";

export const writeNewEmail = async (
  email: string,
  newEmail: string,
  verificationCode: string
) => {
  let isSuccessful: boolean = false;
  let returnData: any;

  await accountModel
    .update(
      {
        email: newEmail,
        is_email_verified: false,
        verification_code: verificationCode,
      },
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
      ? `${Var.app.emoji.success} Email updated`
      : `${Var.app.emoji.failure} Failed to update email. Please contact ${Var.app.contact.email}`,
    payload: returnData,
  };
};
