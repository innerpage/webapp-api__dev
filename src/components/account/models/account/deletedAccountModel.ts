import { DataTypes } from "sequelize";
import { Sequelize } from "../../../../global/var";

const modelName: string = "deletedAccount";
const modelAttributes: any = {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  user_name: { type: DataTypes.STRING, allowNull: false },
  registered_on: { type: DataTypes.STRING },
};
const modelOptions: any = {};

export const deletedAccountModel = Sequelize.define(
  modelName,
  modelAttributes,
  modelOptions
);
