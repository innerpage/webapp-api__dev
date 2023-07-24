import { accountModel } from "../../models";

export const writeNewPassword = async (
  email: string,
  newHashedPassword: string
) => {
  let isPasswordResetCodeUpdated: boolean = false;
  let payload: any;

  await accountModel
    .update(
      { password: newHashedPassword, password_reset_code: "" },
      {
        where: {
          email: email,
        },
      }
    )
    .then((updatedAccount: any) => {
      isPasswordResetCodeUpdated = true;
      payload = updatedAccount;
    })
    .catch((err) => (payload = err));

  if (isPasswordResetCodeUpdated) {
    return {
      success: true,
      message: "New password saved",
      payload: payload,
    };
  } else {
    return {
      success: false,
      message: "New password not saved",
      payload: payload,
    };
  }
};
