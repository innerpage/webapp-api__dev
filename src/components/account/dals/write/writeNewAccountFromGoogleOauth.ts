import { accountModel } from "../../models";

export const writeNewAccountFromGoogleOauth = async (
  firstName: string,
  lastName: string,
  email: string,
  isEmailVerified: boolean,
  isGoogleOauthLinked: boolean
) => {
  let isNewAccountCreated: boolean = false;
  let payload: any;

  await accountModel
    .create({
      first_name: firstName,
      last_name: lastName,
      email: email,
      is_email_verified: isEmailVerified,
      is_google_oauth_linked: isGoogleOauthLinked,
    })
    .then((newAccount: any) => {
      isNewAccountCreated = true;
      payload = {
        id: newAccount.dataValues.id,
        firstName: newAccount.dataValues.first_name,
        lastName: newAccount.dataValues.last_name,
        email: newAccount.dataValues.email,
        isEmailVerified: newAccount.dataValues.is_email_verified,
      };
    })
    .catch((err) => {
      payload = err;
    });

  if (isNewAccountCreated) {
    return {
      success: true,
      message: "✅ New account created",
      payload: payload,
    };
  } else {
    return {
      success: false,
      message: "❌ Could not create new account",
      payload: payload,
    };
  }
};
