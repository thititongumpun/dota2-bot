import { RedisClientOptions } from "redis";
import { createClient } from "redis";
import * as dotenv from "dotenv";
dotenv.config();

const REDISURL = process.env.REDISURL || "";

const redisOptions: RedisClientOptions = ({
  url: REDISURL,
});

export const redisClient = createClient(redisOptions);

redisClient.on("error", function (err) {
  console.log('cannot connect redis...');
  throw err;
});

redisClient.connect();
