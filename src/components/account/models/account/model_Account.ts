import { DataTypes } from "sequelize";
import { sequelize } from "../../../../config";

const model_Account_Name: string = "account";
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
    validate: { isIn: [["individual", "organisation", ""]] },
    allowNull: true,
  },
  is_publisher: { type: DataTypes.BOOLEAN, defaultValue: false },
  is_disabled: { type: DataTypes.BOOLEAN, defaultValue: false },
  is_email_verified: { type: DataTypes.BOOLEAN, defaultValue: false },
  email_verification_code: { type: DataTypes.STRING },
  password_reset_code: { type: DataTypes.STRING },
};
const model_Account_Options: any = {};

export const model_Account = sequelize.define(
  model_Account_Name,
  model_Account_Attributes,
  model_Account_Options
);
