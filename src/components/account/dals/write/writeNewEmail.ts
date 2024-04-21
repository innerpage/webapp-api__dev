import { accountModel } from "../../models";

export const writeNewEmail = async (email: string, newEmail: string) => {
  let isEmailUpdated: boolean = false;
  let payload: any;

  await accountModel
    .update(
      { email: newEmail },
      {
        where: {
          email: email,
        },
      }
    )
    .then((updatedAccount: any) => {
      isEmailUpdated = true;
      payload = updatedAccount;
    })
    .catch((err) => (payload = err));

  if (!isEmailUpdated) {
    return {
      success: false,
      message: "❌ Failed to update email",
      payload: payload,
    };
  }

  return {
    success: true,
    message: "✅ Email updated",
    payload: {
      newEmail: newEmail,
    },
  };
};
