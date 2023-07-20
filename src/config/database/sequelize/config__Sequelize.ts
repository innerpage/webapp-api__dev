import { Sequelize } from "sequelize";
import { config__Postgres } from "../..";

export const sequelize = new Sequelize(
  config__Postgres.database!,
  config__Postgres.user!,
  config__Postgres.password!,
  {
    host: config__Postgres.host!,
    dialect: "postgres",
  }
);
