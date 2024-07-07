import { SequelizeVar } from "../../../../global/var/Sequelize";
import { noteModel } from "../../../note/models";
import { Op } from "sequelize";

export const readNoteCreationsByRange = async (
  rangeStartInUTCString: string,
  rangeEndInUTCString: string
) => {
  const noteCreations = await noteModel.findAll({
    attributes: [
      [SequelizeVar.literal(`DATE("createdAt")`), "date"],
      [SequelizeVar.fn("COUNT", SequelizeVar.col("createdAt")), "count"],
    ],
    group: ["date"],
    raw: true,
    order: [["date", "ASC"]],
    where: {
      createdAt: {
        [Op.between]: [rangeStartInUTCString, rangeEndInUTCString],
      },
    },
  });

  return noteCreations;
};
