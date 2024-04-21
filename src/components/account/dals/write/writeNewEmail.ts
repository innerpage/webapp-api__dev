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
      message: "❌ Failed to save new email",
      payload: payload,
    };
  }

  return {
    success: true,
    message: "✅ New email saved",
    payload: {
      newEmail: newEmail,
    },
  };
};
