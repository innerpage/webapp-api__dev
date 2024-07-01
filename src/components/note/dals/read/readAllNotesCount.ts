import { noteModel } from "../../models";
import { Op } from "sequelize";

export const readAllNotesCount = async () => {
  const notesCount = await noteModel.findAndCountAll({
    where: {
      content: {
        [Op.not]: null,
      },
    },
  });

  return notesCount;
};
