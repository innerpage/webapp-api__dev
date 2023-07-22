import { Sequelize } from "sequelize";
import { Postgres_Config } from "../..";

export const Sequelize_Config = new Sequelize(
  Postgres_Config.database!,
  Postgres_Config.user!,
  Postgres_Config.password!,
  {
    host: Postgres_Config.host!,
    dialect: "postgres",
  }
);
