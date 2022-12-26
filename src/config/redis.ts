import { RedisClientOptions } from "redis";
import { createClient } from "redis";
import * as dotenv from "dotenv";
dotenv.config();

const REDISURL = process.env.REDISURL || "";

const redisOptions: RedisClientOptions = ({
  url: REDISURL,
});

export const redisClient = createClient(redisOptions);

(async () => {
  redisClient.on("error", (error) => console.error(`Error : ${error}`));

  await redisClient.connect();
})();
