import { RedisOptions } from "ioredis";
import Redis from "ioredis";
import dotenv from "dotenv";
dotenv.config();

const obj_Redis_Options: RedisOptions = {
  host: process.env.Redis_Host,
  port: +process.env.Redis_Port!,
};

export const config_Redis = new Redis(obj_Redis_Options);
