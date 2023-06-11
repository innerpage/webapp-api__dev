import { DataTypes } from "sequelize";
import { sequelize } from "../../../config";

const model_Toc_Name: string = "toc";
const model_Toc_Attributes: any = {
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
const model_Toc_Options: any = {};

export const model_Toc = sequelize.define(
  model_Toc_Name,
  model_Toc_Attributes,
  model_Toc_Options
);
