import { accountModel } from "../../models";

interface obj_Loose {
  [key: string]: any;
}

export const dal_Account_Write_Status_EmailVerification = async (
  email: string
) => {
  let isSuccess_StatusUpdate: boolean = false;
  let payload: any;
  let returnObject: obj_Loose = {};

  await accountModel
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
    returnObject.success = true;
    returnObject.message = "Email VERIFIED";
    returnObject.payload = payload;
  } else {
    returnObject.success = false;
    returnObject.message = "Email NOT_VERIFIED";
    returnObject.payload = payload;
  }

  return returnObject;
};
