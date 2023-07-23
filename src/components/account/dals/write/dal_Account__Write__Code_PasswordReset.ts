import { accountModel } from "../../models";

interface obj_Loose {
  [key: string]: any;
}

export const dal_Account_Write_Code_PasswordReset = async (
  email: string,
  code_PasswordReset: number
) => {
  let isSuccess_PasswordResetCodeSaved: boolean = false;
  let payload: any;
  let returnObject: obj_Loose = {};

  await accountModel
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
    returnObject.success = true;
    returnObject.message = "Password reset code SAVED";
    returnObject.payload = payload;
  } else {
    returnObject.success = false;
    returnObject.message = "Password reset code NOT_SAVED";
    returnObject.payload = payload;
  }

  return returnObject;
};
