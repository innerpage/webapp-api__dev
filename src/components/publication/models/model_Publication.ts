import { DataTypes } from "sequelize";
import { sequelize } from "../../../config";

const model_Publication_Name: string = "publication";
const model_Publication_Attributes: any = {
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
    type: DataTypes.STRING,
    allowNull: false,
  },
  url_sample: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url_toc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url_cover: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_published: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
};
const model_Publication_Options: any = {};

export const model_Publication = sequelize.define(
  model_Publication_Name,
  model_Publication_Attributes,
  model_Publication_Options
);
