import { DataTypes } from "sequelize";
import { sequelize } from "../../../config";

const model_Subscriber_Name: string = "subscriber";
const model_Subscriber_Attributes: any = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  organisation: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING },
  country: { type: DataTypes.STRING, allowNull: false },
  state: { type: DataTypes.STRING, allowNull: false },
};
const model_Subscriber_Options: any = {};

export const model_Subscriber = sequelize.define(
  model_Subscriber_Name,
  model_Subscriber_Attributes,
  model_Subscriber_Options
);
