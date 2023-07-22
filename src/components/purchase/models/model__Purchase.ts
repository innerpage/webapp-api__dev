import { DataTypes } from "sequelize";
import { config_Sequelize } from "../../../config";

const model__Name: string = "purchase";
const model__Attributes: any = {
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

const model__Options: any = {};

export const model__Purchase = config_Sequelize.define(
  model__Name,
  model__Attributes,
  model__Options
);
