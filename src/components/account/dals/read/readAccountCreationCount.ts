import { SequelizeVar } from "../../../../global/var/Sequelize";
import { accountModel } from "../../models";

export const readAccountCreationCount = async () => {
  const accountCreationCount = await accountModel.findAll({
    attributes: [
      [SequelizeVar.literal(`DATE("createdAt")`), "date"],
      [SequelizeVar.fn("COUNT", SequelizeVar.col("createdAt")), "count"],
    ],
    group: ["createdAt"],
    raw: true,
  });

  return accountCreationCount;
};
