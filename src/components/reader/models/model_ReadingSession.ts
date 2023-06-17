import { DataTypes } from "sequelize";
import { sequelize } from "../../../config";

const model_ReadingSession_Name: string = "reading_session";
const model_ReadingSession_Attributes: any = {
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
const model_ReadingSession_Options: any = {};

export const model_ReadingSession = sequelize.define(
  model_ReadingSession_Name,
  model_ReadingSession_Attributes,
  model_ReadingSession_Options
);
