import dotenv from "dotenv";
dotenv.config();

interface obj_Postgres_Config {
  host?: string;
  port?: string;
  database?: string;
  user?: string;
  password?: string;
}

export const Postgres_Config: obj_Postgres_Config = {
  host: process.env.Postgres_Host,
  port: process.env.Postgres_Port,
  database: process.env.Postgres_Database,
  user: process.env.Postgres_User,
  password: process.env.Postgres_Password,
};
