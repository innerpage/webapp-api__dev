import { DataTypes } from "sequelize";
import { SequelizeConfig } from "../../../config";

const modelName: string = "purchase";
const modelAttributes: any = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  productId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sessionId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isSuccess: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
};

const modelOptions: any = {};

export const purchaseModel = SequelizeConfig.define(
  modelName,
  modelAttributes,
  modelOptions
);
