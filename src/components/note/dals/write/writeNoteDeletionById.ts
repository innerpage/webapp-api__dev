import { noteModel } from "../../models";
import { Var } from "../../../../global/var";

export const writeNoteDeletionById = async (id: string, accountId: string) => {
  let isSuccessful: boolean = false;
  let returnData: any;

  await noteModel
    .destroy({
      where: { id: id, accountId: accountId },
    })
    .then((deletedNote: any) => {
      isSuccessful = true;
      returnData = deletedNote;
    })
    .catch((err: any) => (returnData = err));

  return {
    success: isSuccessful,
    message: isSuccessful
      ? `${Var.app.emoji.success} Note deleted`
      : `${Var.app.emoji.failure} Could not delete note. Please contact ${Var.app.contact.email}`,
    payload: returnData,
  };
};
