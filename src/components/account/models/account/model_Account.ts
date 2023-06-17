import { DataTypes } from "sequelize";
import { sequelize } from "../../../../config";

const model_Name: string = "account";
const model_Attributes: any = {
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
  is_publisher: { type: DataTypes.BOOLEAN, defaultValue: false },
  is_email_verified: { type: DataTypes.BOOLEAN, defaultValue: false },
  email_verification_code: {
    type: DataTypes.STRING,
  },
  password_reset_code: { type: DataTypes.STRING, defaultValue: "" },
  is_disabled: { type: DataTypes.BOOLEAN, defaultValue: false },
};
const model_Options: any = {};

export const model_Account = sequelize.define(
  model_Name,
  model_Attributes,
  model_Options
);
