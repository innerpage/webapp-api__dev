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
  name: { type: DataTypes.STRING, allowNull: false },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { isEmail: true },
  },
  is_email_verified: { type: DataTypes.BOOLEAN, defaultValue: false },
  is_google_oauth_linked: { type: DataTypes.BOOLEAN, defaultValue: false },
  registered_on: { type: DataTypes.STRING },
};
const modelOptions: any = {};

export const deletedAccountModel = Sequelize.define(
  modelName,
  modelAttributes,
  modelOptions
);
