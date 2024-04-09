import { accountModel } from "../../models";

export const writeAccountDeletion = async (id: string) => {
  let isDeletionSuccessful: boolean = false;
  let payload: any;

  await accountModel
    .destroy({
      where: { id: id },
    })
    .then((deletedAccount: any) => {
      isDeletionSuccessful = true;
      payload = deletedAccount;
    })
    .catch((err) => (payload = err));

  return {
    success: isDeletionSuccessful,
    message: isDeletionSuccessful ? "Account deleted" : "Account not deleted",
    payload: payload,
  };
};
