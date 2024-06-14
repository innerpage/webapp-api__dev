import { Var } from "../../../../global/var";
import { accountModel } from "../../models";

export const writeVerificationCode = async (
  email: string,
  verificationCode: string
) => {
  let isSuccessful: boolean = false;
  let returnData: any;

  await accountModel
    .update(
      { verification_code: verificationCode },
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
      ? `${Var.app.emoji.success} Email verification code saved`
      : `${Var.app.emoji.failure} Email verification code not saved. Please contact ${Var.app.contact.email}`,
    payload: returnData,
  };
};
