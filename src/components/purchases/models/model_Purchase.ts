import { DataTypes } from "sequelize";
import { sequelize } from "../../../config";

const model_Purchase_Name: string = "purchase";
const model_Purchase_Attributes: any = {};
const model_Purchase_Options: any = {};

export const model_Purchase = sequelize.define(
  model_Purchase_Name,
  model_Purchase_Attributes,
  model_Purchase_Options
);
