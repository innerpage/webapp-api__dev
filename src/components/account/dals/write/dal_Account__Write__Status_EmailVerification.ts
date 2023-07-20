import { model__Account } from "../../models";

interface LooseObj {
  [key: string]: any;
}

export const dal_Account__Write__Status_EmailVerification = async (
  email: string
) => {
  let isSuccess_StatusUpdate: boolean = false;
  let payload: any;
  let obj_Return: LooseObj = {};

  await model__Account
    .update(
      { is_email_verified: true, email_verification_code: "" },
      {
        where: {
          email: email,
        },
      }
    )
    .then((updated_Account: any) => {
      isSuccess_StatusUpdate = true;
      payload = {};
    })
    .catch((err) => (payload = err));

  if (isSuccess_StatusUpdate) {
    obj_Return.success = true;
    obj_Return.message = "Email VERIFIED";
    obj_Return.payload = payload;
  } else {
    obj_Return.success = false;
    obj_Return.message = "Email NOT_VERIFIED";
    obj_Return.payload = payload;
  }

  return obj_Return;
};
