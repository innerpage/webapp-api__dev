import dotenv from "dotenv";
dotenv.config();

interface Postgres_Config_Obj {
  host?: string;
  port?: string;
  database?: string;
  user?: string;
  password?: string;
}

export const Postgres_Config: Postgres_Config_Obj = {
  host: process.env.Postgres_Host,
  port: process.env.Postgres_Port,
  database: process.env.Postgres_Database,
  user: process.env.Postgres_User,
  password: process.env.Postgres_Password,
};
