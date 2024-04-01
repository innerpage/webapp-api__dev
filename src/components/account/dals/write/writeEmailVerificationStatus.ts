import { accountModel } from "../../models";

export const writeEmailVerificationStatus = async (email: string) => {
  let isStatusUpdated: boolean = false;
  let payload: any;

  await accountModel
    .update(
      { is_email_verified: true, verification_code: "" },
      {
        where: {
          email: email,
        },
      }
    )
    .then((updatedAccount: any) => {
      isStatusUpdated = true;
      payload = updatedAccount;
    })
    .catch((err) => (payload = err));

  if (isStatusUpdated) {
    return {
      success: true,
      message: "Status updated",
      payload: payload,
    };
  } else {
    return {
      success: false,
      message: "Status not updated",
      payload: payload,
    };
  }
};
