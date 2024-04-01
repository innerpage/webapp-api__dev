import { accountModel } from "../../models";

export const writeNewPassword = async (
  email: string,
  newHashedPassword: string
) => {
  let isPasswordUpdated: boolean = false;
  let payload: any;

  await accountModel
    .update(
      { password: newHashedPassword, verification_code: "" },
      {
        where: {
          email: email,
        },
      }
    )
    .then((updatedAccount: any) => {
      isPasswordUpdated = true;
      payload = updatedAccount;
    })
    .catch((err) => (payload = err));

  if (!isPasswordUpdated) {
    return {
      success: false,
      message: "❌ New password not saved",
      payload: payload,
    };
  }

  return {
    success: true,
    message: "✅ New password saved",
    payload: payload,
  };
};
