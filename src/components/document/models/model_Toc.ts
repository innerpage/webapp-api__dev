import { DataTypes } from "sequelize";
import { sequelize } from "../../../config";

const model_Name: string = "toc";
const model_Attributes: any = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  toc: {
    type: DataTypes.JSON,
    allowNull: false,
  },
};
const model_Options: any = {};

export const model_Toc = sequelize.define(
  model_Name,
  model_Attributes,
  model_Options
);
