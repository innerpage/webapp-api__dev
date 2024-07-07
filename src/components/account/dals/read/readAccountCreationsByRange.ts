import { SequelizeVar } from "../../../../global/var/Sequelize";
import { accountModel } from "../../models";
import { Op } from "sequelize";

export const readAccountCreationsByRange = async (
  rangeStartInUTCString: string,
  rangeEndInUTCString: string
) => {
  const accountCreations = await accountModel.findAll({
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

  return accountCreations;
};
