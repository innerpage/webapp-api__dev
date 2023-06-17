import { DataTypes } from "sequelize";
import { sequelize } from "../../../config";

const model_Name: string = "reading_session";
const model_Attributes: any = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  account_id: { type: DataTypes.STRING, allowNull: false },
  socket_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
};
const model_Options: any = {};

export const model_ReadingSession = sequelize.define(
  model_Name,
  model_Attributes,
  model_Options
);
