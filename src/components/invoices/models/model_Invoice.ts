import { DataTypes } from "sequelize";
import { sequelize } from "../../../config";

const model_Invoice_Name: string = "invoice";
const model_Invoice_Attributes: any = {};
const model_Invoice_Options: any = {};

export const model_Invoice = sequelize.define(
  model_Invoice_Name,
  model_Invoice_Attributes,
  model_Invoice_Options
);
