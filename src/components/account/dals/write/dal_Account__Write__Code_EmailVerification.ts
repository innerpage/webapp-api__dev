import { model__Account } from "../../models";

interface LooseObj {
  [key: string]: any;
}

export const dal_Account__Write__Code_EmailVerification = async (
  id__Account: string,
  code_EmailVerification: number
) => {
  let isSuccess_EmailVerificationCode_Saved: boolean = false;
  let payload: any;
  let obj_Return: LooseObj = {};

  await model__Account
    .update(
      { email_verification_code: code_EmailVerification },
      {
        where: {
          id: id__Account,
        },
      }
    )
    .then((updated_Account: any) => {
      isSuccess_EmailVerificationCode_Saved = true;
      payload = {};
    })
    .catch((err) => (payload = err));

  if (isSuccess_EmailVerificationCode_Saved) {
    obj_Return.success = true;
    obj_Return.message = "Email verification code SAVED";
    obj_Return.payload = payload;
  } else {
    obj_Return.success = false;
    obj_Return.message = "Email verification code NOT_SAVED";
    obj_Return.payload = payload;
  }

  return obj_Return;
};
