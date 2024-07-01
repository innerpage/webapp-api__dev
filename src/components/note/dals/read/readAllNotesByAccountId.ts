import { Sequelize } from "../../../../global/var";
import { noteModel } from "../../models";

export const readAllNotesByAccountId = async (accountId: string) => {
  const notes = await noteModel.findAll({
    attributes: [
      "id",
      "preview",
      "createdAt",
      // [Sequelize.cast(Sequelize.col("createdAt"), "Date"), "timestamp"],
    ],
    where: {
      accountId: accountId,
    },
    order: [["updatedAt", "DESC"]],
  });

  return notes;
};
