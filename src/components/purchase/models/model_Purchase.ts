import { DataTypes } from "sequelize";
import { config__Sequelize } from "../../../config";

const model_Name: string = "purchase";
const model_Attributes: any = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  value_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  session_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount_paid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  is_success: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
};

const model_Options: any = {};

export const model_Purchase = config__Sequelize.define(
  model_Name,
  model_Attributes,
  model_Options
);
