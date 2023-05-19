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
  id_Document: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_Purchase_Session: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_Paid: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  base_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gateway_fees: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tax_amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};
const model_Purchase_Options: any = {};

export const model_Purchase = sequelize.define(
  model_Purchase_Name,
  model_Purchase_Attributes,
  model_Purchase_Options
);
