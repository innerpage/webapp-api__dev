import { DataTypes } from "sequelize";
import { sequelize } from "../../../config";

const model_Page_Name: string = "page";
const model_Page_Attributes: any = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  url_page: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  no: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};
const model_Page_Options: any = {};

export const model_Page = sequelize.define(
  model_Page_Name,
  model_Page_Attributes,
  model_Page_Options
);
