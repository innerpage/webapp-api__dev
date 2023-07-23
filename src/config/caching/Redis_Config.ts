import { RedisOptions } from "ioredis";
import Redis from "ioredis";
import dotenv from "dotenv";
dotenv.config();

const redis_Options: RedisOptions = {
  host: process.env.REDIS_HOST,
  port: +process.env.REDIS_PORT!,
};

export const Redis_Config = new Redis(redis_Options);
