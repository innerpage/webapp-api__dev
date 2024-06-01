import { Sequelize } from "sequelize";
import { AppVar } from "./";

export const SequelizeVar = new Sequelize(
  AppVar.postgres.database!,
  AppVar.postgres.user!,
  AppVar.postgres.password!,
  {
    host: AppVar.postgres.host,
    dialect: "postgres",
  }
);
