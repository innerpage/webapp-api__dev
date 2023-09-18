import { accountModel } from "../../models";

export const writeGoogleOauthStatus = async (email: string) => {
  let isStatusUpdated: boolean = false;
  let payload: any;

  await accountModel
    .update(
      { is_email_verified: true, is_google_oauth_linked: true },
      {
        where: {
          email: email,
        },
      }
    )
    .then((updatedAccount: any) => {
      isStatusUpdated = true;
      payload = updatedAccount;
    })
    .catch((err) => (payload = err));

  if (isStatusUpdated) {
    return {
      success: true,
      message: "✅ Google oauth status updated",
      payload: payload,
    };
  } else {
    return {
      success: false,
      message: "❌ Could not update Google oauth status",
      payload: payload,
    };
  }
};
