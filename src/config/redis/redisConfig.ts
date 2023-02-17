import { RedisOptions } from "ioredis";

import Redis from "ioredis";
import dotenv from "dotenv";
dotenv.config();

const redisOptions: RedisOptions = {
  host: process.env.REDIS_HOST,
  port: +process.env.REDIS_PORT!,
};

export const redisClient = new Redis(redisOptions);
