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
  let returnObject: obj_Loose = {};

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
    returnObject.success = true;
    returnObject.message = "New password SAVED";
    returnObject.payload = payload;
  } else {
    returnObject.success = false;
    returnObject.message = "New password NOT_SAVED";
    returnObject.payload = payload;
  }

  return returnObject;
};
