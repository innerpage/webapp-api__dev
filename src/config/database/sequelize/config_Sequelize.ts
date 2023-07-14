import { Sequelize } from "sequelize";
import { config_Postgres } from "../..";

export const sequelize = new Sequelize(
  config_Postgres.database!,
  config_Postgres.user!,
  config_Postgres.password!,
  {
    host: config_Postgres.host!,
    dialect: "postgres",
  }
);
