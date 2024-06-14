import { Sequelize } from "sequelize";
import { Var } from ".";

export const SequelizeVar = new Sequelize(
  Var.postgres.database!,
  Var.postgres.user!,
  Var.postgres.password!,
  {
    host: Var.postgres.host,
    dialect: "postgres",
    logging: false,
  }
);
