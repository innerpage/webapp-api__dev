import { Var } from "../../../../global/var";
import { accountModel } from "../../models";

export const writeNewAccountFromGoogleOauth = async (
  name: string,
  email: string,
  isEmailVerified: boolean,
  isGoogleOauthLinked: boolean
) => {
  let isSuccessful: boolean = false;
  let returnData: any;

  await accountModel
    .create({
      name: name,
      email: email,
      is_email_verified: isEmailVerified,
      is_google_oauth_linked: isGoogleOauthLinked,
    })
    .then((newAccount: any) => {
      isSuccessful = true;
      returnData = {
        id: newAccount.dataValues.id,
        name: newAccount.dataValues.name,
        email: newAccount.dataValues.email,
        isEmailVerified: newAccount.dataValues.is_email_verified,
      };
    })
    .catch((err: any) => {
      returnData = err;
    });

  return {
    success: isSuccessful,
    message: isSuccessful
      ? `${Var.app.emoji.success} New account created from Google Oauth`
      : `${Var.app.emoji.failure} Could not create account from Google Oauth. Please contact ${Var.app.contact.email}`,
    payload: returnData,
  };
};
