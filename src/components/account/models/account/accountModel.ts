import { DataTypes } from "sequelize";
import { SequelizeConfig } from "../../../../config";

const modelName: string = "account";
const modelAttributes: any = {
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
  password: { type: DataTypes.STRING, allowNull: true },
  is_email_verified: { type: DataTypes.BOOLEAN, defaultValue: false },
  email_verification_code: {
    type: DataTypes.STRING,
  },
  password_reset_code: { type: DataTypes.STRING, defaultValue: "" },
  is_google_oauth_linked: { type: DataTypes.BOOLEAN, defaultValue: false },
  is_disabled: { type: DataTypes.BOOLEAN, defaultValue: false },
};
const modelOptions: any = {};

export const accountModel = SequelizeConfig.define(
  modelName,
  modelAttributes,
  modelOptions
);
