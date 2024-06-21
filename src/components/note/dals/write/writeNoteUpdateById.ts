import { noteModel } from "../../models";
import { Var } from "../../../../global/var";

export const writeNoteUpdateById = async (
  id: string,
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
          id: id,
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
      : `${Var.app.emoji.failure} Could not update new note. Please contact ${Var.app.contact.email}`,
    payload: returnData,
  };
};
