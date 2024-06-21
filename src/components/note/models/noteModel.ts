import { DataTypes } from "sequelize";
import { Sequelize } from "../../../global/var";

const modelName: string = "note";
const modelAttributes: any = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  content: { type: DataTypes.TEXT, allowNull: false },
  preview: { type: DataTypes.STRING, allowNull: false },
};

const modelOptions: any = {};

export const noteModel = Sequelize.define(
  modelName,
  modelAttributes,
  modelOptions
);
