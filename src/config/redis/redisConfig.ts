import dotenv from "dotenv";
dotenv.config();

export const redisConfig = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
};
