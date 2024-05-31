import { Sequelize } from "sequelize";
import { ConfigVar } from "./";

export const SequelizeVar = new Sequelize(
  ConfigVar.postgres.database!,
  ConfigVar.postgres.user!,
  ConfigVar.postgres.password!,
  {
    host: ConfigVar.postgres.host,
    dialect: "postgres",
  }
);
