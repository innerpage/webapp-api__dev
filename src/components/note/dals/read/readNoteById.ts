import { noteModel } from "../../models";

export const readNoteById = async (id: string) => {
  const note = await noteModel.findOne({
    where: {
      id: id,
    },
  });

  return note;
};
