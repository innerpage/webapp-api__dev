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
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  prop_1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prop_2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prop_3: {
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