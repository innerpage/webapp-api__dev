import { DataTypes } from "sequelize";
import { sequelize } from "../../../config";

const model_Publisher_Name: string = "publisher";
const model_Publisher_Attributes: any = {};
const model_Publisher_Options: any = {};

export const model_Publisher = sequelize.define(
  model_Publisher_Name,
  model_Publisher_Attributes,
  model_Publisher_Options
);
