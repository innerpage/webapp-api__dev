import { Var } from "../../../../global/var";
import { accountModel } from "../../models";

export const writeEmailVerificationStatus = async (
  email: string,
  isEmailVerified: boolean
) => {
  let isSuccessful: boolean = false;
  let returnData: any;

  await accountModel
    .update(
      { is_email_verified: isEmailVerified },
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
      ? `${Var.app.emoji.success} Email verification status saved`
      : `${Var.app.emoji.failure} Could not save email verification status. Please contact ${Var.app.contact.email}`,
    payload: returnData,
  };
};
