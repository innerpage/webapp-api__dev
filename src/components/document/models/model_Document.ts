import { DataTypes } from "sequelize";
import { sequelize } from "../../../config";

const model_Name: string = "document";
const model_Attributes: any = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sl_no: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};
const model_Options: any = {};

export const model_Document = sequelize.define(
  model_Name,
  model_Attributes,
  model_Options
);
