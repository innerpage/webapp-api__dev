import { accountModel } from "../../models";

export const writeVerificationCode = async (
  email: string,
  verificationCode: string
) => {
  let isVerificationCodeSaved: boolean = false;
  let payload: any;

  await accountModel
    .update(
      { verification_code: verificationCode },
      {
        where: {
          email: email,
        },
      }
    )
    .then((updatedAccount: any) => {
      isVerificationCodeSaved = true;
      payload = updatedAccount;
    })
    .catch((err) => (payload = err));

  if (!isVerificationCodeSaved) {
    return {
      success: false,
      message: "❌ Email verification code not saved",
      payload: payload,
    };
  }

  return {
    success: true,
    message: "✅ Email verification code saved",
    payload: payload,
  };
};
