import { accountModel } from "../../models";

export const writeAccountDeletionStatus = async (accountId: string) => {
  let isStatusUpdated: boolean = false;
  let payload: any;

  await accountModel
    .update(
      { is_deleted: true },
      {
        where: {
          id: accountId,
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
      message: "Account deletion status updated",
      payload: payload,
    };
  } else {
    return {
      success: false,
      message: "Account deletion status not updated",
      payload: payload,
    };
  }
};
