import { Var } from "../../../../global/var";
import { accountModel } from "../../models";

export const writeGoogleOauthStatus = async (email: string) => {
  let isSuccessful: boolean = false;
  let returnData: any;

  await accountModel
    .update(
      {
        is_email_verified: true,
        verification_code: "",
        is_google_oauth_linked: true,
      },
      {
        where: {
          email: email,
        },
      }
    )
    .then((updatedAccount: any) => {
      isSuccessful = true;
      console.log(updatedAccount);
      returnData = updatedAccount;
    })
    .catch((err: any) => (returnData = err));

  return {
    success: isSuccessful,
    message: isSuccessful
      ? `${Var.app.emoji.success} Google oauth status updated`
      : `${Var.app.emoji.failure} Could not update Google oauth status. Please contact ${Var.app.contact.email}`,
    payload: returnData,
  };
};
