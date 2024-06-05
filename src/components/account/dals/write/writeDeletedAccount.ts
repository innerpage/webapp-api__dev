import { deletedAccountModel } from "../../models";

export const writeDeletedAccount = async (
  id: string,
  name: string,
  email: string,
  isEmailVerified: boolean,
  isGoogleOauthLinked: boolean,
  registeredOn: string
) => {
  let isWriteSuccessful: boolean = false;
  let payload: any;

  await deletedAccountModel
    .create({
      id: id,
      name: name,
      email: email,
      is_email_verified: isEmailVerified,
      is_google_oauth_linked: isGoogleOauthLinked,
      registered_on: registeredOn,
    })
    .then((deletedAccount: any) => {
      isWriteSuccessful = true;
      payload = deletedAccount;
    })
    .catch((err) => (payload = err));

  return {
    success: isWriteSuccessful,
    message: isWriteSuccessful ? "Account deleted" : "Account not deleted",
    payload: payload,
  };
};
