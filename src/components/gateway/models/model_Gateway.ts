import { DataTypes } from "sequelize";
import { sequelize } from "../../../config";

const model_Gateway_Name: string = "gateway";
const model_Gateway_Attributes: any = {
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
  secrey_key: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  webhook_secret: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};
const model_Gateway_Options: any = {};

export const model_Gateway = sequelize.define(
  model_Gateway_Name,
  model_Gateway_Attributes,
  model_Gateway_Options
);
