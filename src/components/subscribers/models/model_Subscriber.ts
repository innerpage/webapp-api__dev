import { DataTypes } from "sequelize";
import { sequelize } from "../../../config";

const model_Subscriber_Name: string = "subscriber";
const model_Subscriber_Attributes: any = {};
const model_Subscriber_Options: any = {};

export const model_Subscriber = sequelize.define(
  model_Subscriber_Name,
  model_Subscriber_Attributes,
  model_Subscriber_Options
);
