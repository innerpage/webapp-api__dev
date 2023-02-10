import { DataTypes } from "sequelize";
import { sequelize } from "../../../config";

const model_Document_Name: string = "document";
const model_Document_Attributes: any = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sub_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pages_count: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price_inr: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  price_usd: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
};
const model_Document_Options: any = {};

export const model_Document = sequelize.define(
  model_Document_Name,
  model_Document_Attributes,
  model_Document_Options
);
