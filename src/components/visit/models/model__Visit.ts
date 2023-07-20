import { DataTypes } from "sequelize";
import { config__Sequelize } from "../../../config";

const model__Name: string = "visit";
const model__Attributes: any = {
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

const model__Options: any = {};

export const model__Visit = config__Sequelize.define(
  model__Name,
  model__Attributes,
  model__Options
);
