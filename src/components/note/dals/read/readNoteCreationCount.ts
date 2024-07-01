import { SequelizeVar } from "../../../../global/var/Sequelize";
import { noteModel } from "../../../note/models";

export const readNoteCreationCount = async () => {
  const noteCreationCount = await noteModel.findAll({
    attributes: [
      [SequelizeVar.literal(`DATE("createdAt")`), "date"],
      [SequelizeVar.fn("COUNT", SequelizeVar.col("createdAt")), "count"],
    ],
    group: ["date"],
    raw: true,
  });

  return noteCreationCount;
};
