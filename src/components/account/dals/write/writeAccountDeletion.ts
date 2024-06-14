import { accountModel } from "../../models";
import { Var } from "../../../../global/var";

export const writeAccountDeletion = async (id: string) => {
  let isSuccessful: boolean = false;
  let returnData: any;
  await accountModel
    .destroy({
      where: { id: id },
    })
    .then((deletedAccount: any) => {
      isSuccessful = true;
      returnData = deletedAccount;
    })
    .catch((err: any) => (returnData = err));

  return {
    success: isSuccessful,
    message: isSuccessful
      ? `${Var.app.emoji.success} Account deleted`
      : `${Var.app.emoji.failure} Could not delete account. Please contact ${Var.app.contact.email}`,
    payload: returnData,
  };
};
