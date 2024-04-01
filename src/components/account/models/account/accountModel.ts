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
  name: { type: DataTypes.STRING, allowNull: false },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
  password: { type: DataTypes.STRING, allowNull: true },
  is_email_verified: { type: DataTypes.BOOLEAN, defaultValue: false },
  verification_code: {
    type: DataTypes.STRING,
  },
  is_google_oauth_linked: { type: DataTypes.BOOLEAN, defaultValue: false },
};

const modelOptions: any = {};

export const accountModel = SequelizeConfig.define(
  modelName,
  modelAttributes,
  modelOptions
);
