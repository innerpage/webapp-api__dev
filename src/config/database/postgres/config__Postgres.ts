import dotenv from "dotenv";
dotenv.config();

interface obj_PostgresConfig {
  host?: string;
  port?: string;
  database?: string;
  user?: string;
  password?: string;
}

export const config__Postgres: obj_PostgresConfig = {
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DATABASE,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
};
