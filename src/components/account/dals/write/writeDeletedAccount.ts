import { deletedAccountModel } from "../../models";

export const writeDeletedAccount = async (
  id: string,
  name: string,
  email: string,
  isEmailVerified: boolean,
  isGoogleOauthLinked: boolean
) => {
  let isAccountDeleted: boolean = false;
  let payload: any;

  await deletedAccountModel
    .create({
      id: id,
      name: name,
      email: email,
      is_email_verified: isEmailVerified,
      is_google_oauth_linked: isGoogleOauthLinked,
    })
    .then((deletedAccount: any) => {
      isAccountDeleted = true;
      payload = deletedAccount;
    })
    .catch((err) => (payload = err));

  if (isAccountDeleted) {
    return {
      success: true,
      message: "Account deleted",
      payload: payload,
    };
  } else {
    return {
      success: false,
      message: "Account not deleted",
      payload: payload,
    };
  }
};
