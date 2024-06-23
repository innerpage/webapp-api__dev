import { noteModel } from "../../models";
import { Var } from "../../../../global/var";

export const writeNoteUpdateById = async (
  noteId: string,
  accountId: string,
  content: string,
  preview: string
) => {
  let isSuccessful: boolean = false;
  let returnData: any;

  await noteModel
    .update(
      { content: content, preview: preview },
      {
        where: {
          id: noteId,
          accountId: accountId,
        },
      }
    )
    .then((updatedNote: any) => {
      isSuccessful = true;
      returnData = updatedNote;
    })
    .catch((err: any) => (returnData = err));

  return {
    success: isSuccessful,
    message: isSuccessful
      ? `${Var.app.emoji.success} Note updated`
      : `${Var.app.emoji.failure} Could not update note. Please contact ${Var.app.contact.email}`,
    payload: returnData,
  };
};
