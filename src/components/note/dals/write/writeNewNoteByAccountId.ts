import { noteModel } from "../../models";
import { Var } from "../../../../global/var";

export const writeNewNoteByAccountId = async (accountId: string) => {
  let isSuccessful: boolean = false;
  let returnData: any;
  await noteModel
    .create({
      where: { accountId: accountId },
    })
    .then((newNote: any) => {
      isSuccessful = true;
      returnData = newNote;
    })
    .catch((err: any) => (returnData = err));

  return {
    success: isSuccessful,
    message: isSuccessful
      ? `${Var.app.emoji.success} Note created`
      : `${Var.app.emoji.failure} Could not create new note. Please contact ${Var.app.contact.email}`,
    payload: returnData,
  };
};
