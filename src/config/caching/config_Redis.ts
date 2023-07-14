import { RedisOptions } from "ioredis";
import Redis from "ioredis";
import dotenv from "dotenv";
dotenv.config();

const obj_RedisOptions: RedisOptions = {
  host: process.env.REDIS_HOST,
  port: +process.env.REDIS_PORT!,
};

export const config_Redis = new Redis(obj_RedisOptions);
