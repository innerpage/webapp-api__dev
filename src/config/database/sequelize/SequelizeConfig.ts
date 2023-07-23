import { Sequelize } from "sequelize";
import { PostgresConfig } from "../..";

export const SequelizeConfig = new Sequelize(
  PostgresConfig.database!,
  PostgresConfig.user!,
  PostgresConfig.password!,
  {
    host: PostgresConfig.host!,
    dialect: "postgres",
  }
);
