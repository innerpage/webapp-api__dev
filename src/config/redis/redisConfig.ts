import { RedisOptions } from "ioredis";

import dotenv from "dotenv";
import Redis from "ioredis";
dotenv.config();

const redisOptions: RedisOptions = {
  host: process.env.REDIS_HOST,
  port: +process.env.REDIS_PORT!,
};

export const redisClient = new Redis(redisOptions);
