import { noteModel } from "../../models";

export const readAllNotesByAccountId = async (accountId: string) => {
  const notes = await noteModel.findAll({
    attributes: ["id", "preview"],
    where: {
      accountId: accountId,
    },
  });

  return notes;
};
