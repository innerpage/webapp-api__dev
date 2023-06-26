import { DataTypes } from "sequelize";
import { sequelize } from "../../../config";

const model_Name: string = "visit";
const model_Attributes: any = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { isEmail: true },
  },
  socket_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_active: { type: DataTypes.BOOLEAN, defaultValue: true },
};

const model_Options: any = {};

export const model_Visit = sequelize.define(
  model_Name,
  model_Attributes,
  model_Options
);