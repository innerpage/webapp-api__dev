import { DataTypes } from "sequelize";
import { config_Sequelize } from "../../../../config";

const model__Name: string = "account";
const model__Attributes: any = {
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
  is_email_verified: { type: DataTypes.BOOLEAN, defaultValue: false },
  email_verification_code: {
    type: DataTypes.STRING,
  },
  password_reset_code: { type: DataTypes.STRING, defaultValue: "" },
  is_disabled: { type: DataTypes.BOOLEAN, defaultValue: false },
};
const model__Options: any = {};

export const model__Account = config_Sequelize.define(
  model__Name,
  model__Attributes,
  model__Options
);
