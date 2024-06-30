import { noteModel } from "../../models";

export const readAllNotesCount = async () => {
  const notesCount = await noteModel.findAndCountAll();

  return notesCount;
};
