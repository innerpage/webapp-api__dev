import { DataTypes } from "sequelize";
import { sequelize } from "../../../config";

const model_Publisher_Name: string = "publisher";
const model_Publisher_Attributes: any = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  country: { type: DataTypes.STRING, allowNull: false },
  state: { type: DataTypes.STRING, allowNull: false },
  tax_type: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { isIn: [["gst"]] },
  },
  tax_id: { type: DataTypes.STRING, allowNull: false },
  tax_value: { type: DataTypes.NUMBER, allowNull: false },
};
const model_Publisher_Options: any = {};

export const model_Publisher = sequelize.define(
  model_Publisher_Name,
  model_Publisher_Attributes,
  model_Publisher_Options
);
