import { DataTypes } from "sequelize";
import { sequelize } from "../../../config";

const model_Name: string = "publication";
const model_Attributes: any = {
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
  edition: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  url_sample: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  url_toc: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  url_cover: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  is_published: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
};
const model_Options: any = {};

export const model_Publication = sequelize.define(
  model_Name,
  model_Attributes,
  model_Options
);
