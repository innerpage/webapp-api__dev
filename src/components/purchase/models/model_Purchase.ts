import { DataTypes } from "sequelize";
import { sequelize } from "../../../config";

const model_Purchase_Name: string = "purchase";
const model_Purchase_Attributes: any = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  document_id: {
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
const model_Purchase_Options: any = {};

export const model_Purchase = sequelize.define(
  model_Purchase_Name,
  model_Purchase_Attributes,
  model_Purchase_Options
);
