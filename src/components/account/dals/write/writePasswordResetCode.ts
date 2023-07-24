import { accountModel } from "../../models";

export const writePasswordResetCode = async (
  email: string,
  passwordResetCode: number
) => {
  let isPasswordResetCodeSaved: boolean = false;
  let payload: any;

  await accountModel
    .update(
      { password_reset_code: passwordResetCode },
      {
        where: {
          email: email,
        },
      }
    )
    .then((updatedAccount: any) => {
      isPasswordResetCodeSaved = true;
      payload = updatedAccount;
    })
    .catch((err) => (payload = err));

  if (isPasswordResetCodeSaved) {
    return {
      success: true,
      message: "Password reset code saved",
      payload: payload,
    };
  } else {
    return {
      success: false,
      message: "Password reset code not saved",
      payload: payload,
    };
  }
};
