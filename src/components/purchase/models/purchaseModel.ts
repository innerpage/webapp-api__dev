import { DataTypes } from "sequelize";
import { SequelizeConfig } from "../../../config";

const modelName: string = "purchase";
const modelAttributes: any = {
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

const modelOptions: any = {};

export const purchaseModel = SequelizeConfig.define(
  modelName,
  modelAttributes,
  modelOptions
);
