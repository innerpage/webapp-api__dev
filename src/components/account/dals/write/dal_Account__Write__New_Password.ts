import { accountModel } from "../../models";

interface obj_Loose {
  [key: string]: any;
}

export const dal_Account_Write_New_Password = async (
  email: string,
  password_Hashed_New: string
) => {
  let isSuccess_PasswordResetCodeSaved: boolean = false;
  let payload: any;
  let obj_Return: obj_Loose = {};

  await accountModel
    .update(
      { password: password_Hashed_New, password_reset_code: "" },
      {
        where: {
          email: email,
        },
      }
    )
    .then((updated_Account: any) => {
      isSuccess_PasswordResetCodeSaved = true;
      payload = {};
    })
    .catch((err) => (payload = err));

  if (isSuccess_PasswordResetCodeSaved) {
    obj_Return.success = true;
    obj_Return.message = "New password SAVED";
    obj_Return.payload = payload;
  } else {
    obj_Return.success = false;
    obj_Return.message = "New password NOT_SAVED";
    obj_Return.payload = payload;
  }

  return obj_Return;
};
