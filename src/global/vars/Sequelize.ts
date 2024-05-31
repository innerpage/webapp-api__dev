import { Sequelize } from "sequelize";
import { Vars } from "./";

export const SequelizeVar = new Sequelize(
  Vars.postgres.database!,
  Vars.postgres.user!,
  Vars.postgres.password!,
  {
    host: Vars.postgres.host,
    dialect: "postgres",
  }
);
