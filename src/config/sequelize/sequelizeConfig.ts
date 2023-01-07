import { Sequelize } from "sequelize";
import { postgresConfig } from "../";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(
  postgresConfig.database!,
  postgresConfig.user!,
  postgresConfig.password!,
  {
    host: postgresConfig.host!,
    dialect: "postgres",
    define: {
      schema: process.env.POSTGRES_SCHEMA,
    },
  }
);
