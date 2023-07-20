import { model__Account } from "../../models";

interface LooseObj {
  [key: string]: any;
}

export const dal_Account__Write__Code_PasswordReset = async (
  email: string,
  code_PasswordReset: number
) => {
  let isSuccess_PasswordResetCodeSaved: boolean = false;
  let payload: any;
  let obj_Return: LooseObj = {};

  await model__Account
    .update(
      { password_reset_code: code_PasswordReset },
      {
        where: {
          email: email,
        },
      }
    )
    .then((updated_Account: any) => {
      isSuccess_PasswordResetCodeSaved = true;
      payload = updated_Account;
    })
    .catch((err) => (payload = err));

  if (isSuccess_PasswordResetCodeSaved) {
    obj_Return.success = true;
    obj_Return.message = "Password reset code SAVED";
    obj_Return.payload = payload;
  } else {
    obj_Return.success = false;
    obj_Return.message = "Password reset code NOT_SAVED";
    obj_Return.payload = payload;
  }

  return obj_Return;
};
