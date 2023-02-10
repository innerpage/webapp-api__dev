import { DataTypes } from "sequelize";
import { sequelize } from "../../../config";

const model_Account_Name: string = "Account";
const model_Account_Attributes: any = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  first_name: { type: DataTypes.STRING, allowNull: false },
  last_name: { type: DataTypes.STRING, allowNull: false },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
  password: { type: DataTypes.STRING, allowNull: false },
  persona: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { isIn: [["individual", "organisation"]] },
  },
  is_publisher: { type: DataTypes.BOOLEAN, defaultValue: false },
};
const model_Account_Options: any = {};

export const model_Account = sequelize.define(
  model_Account_Name,
  model_Account_Attributes,
  model_Account_Options
);
