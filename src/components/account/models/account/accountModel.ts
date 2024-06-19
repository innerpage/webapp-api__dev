import { DataTypes } from "sequelize";
import { Sequelize } from "../../../../global/var";

const modelName: string = "account";
const modelAttributes: any = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  user_name: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: true },
  is_admin: { type: DataTypes.BOOLEAN, defaultValue: false },
};

const modelOptions: any = {};

export const accountModel = Sequelize.define(
  modelName,
  modelAttributes,
  modelOptions
);
