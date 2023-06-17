import { DataTypes } from "sequelize";
import { sequelize } from "../../../config";

const model_Name: string = "gateway";
const model_Attributes: any = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fee_percentage: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  public_key: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  secret_key: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  webhook_secret: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};
const model_Options: any = {};

export const model_Gateway = sequelize.define(
  model_Name,
  model_Attributes,
  model_Options
);
