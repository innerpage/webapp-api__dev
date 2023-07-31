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
  socketId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isActive: { type: DataTypes.BOOLEAN, defaultValue: true },
  ipAddress: { type: DataTypes.STRING },
};

const modelOptions: any = {};

export const visitModel = SequelizeConfig.define(
  modelName,
  modelAttributes,
  modelOptions
);
