import { deletedAccountModel } from "../../models";
import { Var } from "../../../../global/var";

export const writeDeletedAccount = async (
  id: string,
  userName: string,
  registeredOn: string
) => {
  let isSuccessful: boolean = false;
  let returnData: any;

  await deletedAccountModel
    .create({
      id: id,
      user_name: userName,
      registered_on: registeredOn,
    })
    .then((deletedAccount: any) => {
      isSuccessful = true;
      returnData = deletedAccount;
    })
    .catch((err: any) => (returnData = err));

  return {
    success: isSuccessful,
    message: isSuccessful
      ? `${Var.app.emoji.success} Deleted account saved`
      : `${Var.app.emoji.failure} Could not save deleted account. Please contact ${Var.app.contact.email}`,
    payload: returnData,
  };
};
