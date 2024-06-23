import { Sequelize } from "../../../../global/var";
import { noteModel } from "../../models";

export const readNoteById = async (id: string, accountId: string) => {
  const note = await noteModel.findOne({
    attributes: [
      "id",
      "content",
      [Sequelize.cast(Sequelize.col("createdAt"), "Date"), "timestamp"],
    ],
    where: {
      id: id,
      accountId: accountId,
    },
  });

  return note;
};
