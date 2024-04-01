import { accountModel } from "../../models";

export const writeVerificationCode = async (
  accountId: string,
  emailVerificationCode: string
) => {
  let isEmailVerificationCodeSaved: boolean = false;
  let payload: any;

  await accountModel
    .update(
      { verification_code: emailVerificationCode },
      {
        where: {
          id: accountId,
        },
      }
    )
    .then((updatedAccount: any) => {
      isEmailVerificationCodeSaved = true;
      payload = updatedAccount;
    })
    .catch((err) => (payload = err));

  if (isEmailVerificationCodeSaved) {
    return {
      success: true,
      message: "Email verification code saved",
      payload: payload,
    };
  } else {
    return {
      success: false,
      message: "Email verification code not saved",
      payload: payload,
    };
  }
};
