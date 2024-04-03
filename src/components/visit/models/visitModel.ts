import { DataTypes } from "sequelize";
import { SequelizeConfig } from "../../../config";

const modelName: string = "visit";
const modelAttributes: any = {
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
  ip_address: { type: DataTypes.STRING },
};

const modelOptions: any = {};

export const visitModel = SequelizeConfig.define(
  modelName,
  modelAttributes,
  modelOptions
);
