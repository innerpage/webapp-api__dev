import { DataTypes } from "sequelize";
import { SequelizeConfig } from "../../../../config";

const modelName: string = "deletedAccount";
const modelAttributes: any = {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
  is_email_verified: { type: DataTypes.BOOLEAN, defaultValue: false },
  is_google_oauth_linked: { type: DataTypes.BOOLEAN, defaultValue: false },
};
const modelOptions: any = {};

export const deletedAccountModel = SequelizeConfig.define(
  modelName,
  modelAttributes,
  modelOptions
);
