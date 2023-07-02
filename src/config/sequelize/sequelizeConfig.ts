import { Sequelize } from "sequelize";
import { postgresConfig } from "../";

export const sequelize = new Sequelize(
  postgresConfig.database!,
  postgresConfig.user!,
  postgresConfig.password!,
  {
    host: postgresConfig.host!,
    dialect: "postgres",
  }
);
