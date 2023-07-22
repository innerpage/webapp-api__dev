import { RedisOptions } from "ioredis";
import Redis from "ioredis";
import dotenv from "dotenv";
dotenv.config();

const redis_Options: RedisOptions = {
  host: process.env.Redis_Host,
  port: +process.env.Redis_Port!,
};

export const Redis_Config = new Redis(redis_Options);
