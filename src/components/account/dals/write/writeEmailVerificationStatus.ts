import { accountModel } from "../../models";

export const writeEmailVerificationStatus = async (
  email: string,
  isEmailVerified: boolean
) => {
  let isEmailVerificationStatusUpdated: boolean = false;
  let payload: any;

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
      isEmailVerificationStatusUpdated = true;
      payload = updatedAccount;
    })
    .catch((err) => (payload = err));

  if (!isEmailVerificationStatusUpdated) {
    return {
      success: false,
      message: "❌ Email verification status not updated",
      payload: payload,
    };
  }

  return {
    success: true,
    message: "✅ Email verification status updated",
    payload: payload,
  };
};
