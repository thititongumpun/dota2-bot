import { getPlayerId } from "./types/player";
import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import compression from "compression";
import * as dotenv from "dotenv";
import { middleware, WebhookEvent } from "@line/bot-sdk";
import { getPlayerWL } from "./services/getPlayerwl";
import { config, handleEvent } from "./config/line";
import { StatsResponse } from "./types/stats";
import { players } from "./data/players";
import { redisClient } from "./config/redis";
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 8080;

app.use(morgan("tiny"));
app.use(compression());

app.post(
  "/webhook",
  middleware(config),
  async (req: Request, res: Response): Promise<Response> => {
    const events: WebhookEvent[] = req.body.events;
    const results = await Promise.all(
      events.map(async (event: WebhookEvent) => {
        try {
          await handleEvent(event);
        } catch (err: unknown) {
          if (err instanceof Error) {
            console.error(err);
          }

          return res.status(500).json({
            status: "error",
          });
        }
      })
    );
    return res.status(200).json({
      status: "success",
      results,
    });
  }
);

app.get("/", async (_: Request, res: Response): Promise<Response> => {
  return res.status(200).json({
    status: "success",
    message: "Connected successfully!",
  });
});

app.get("/stats", async (_: Request, res: Response) => {
  let response: StatsResponse[] = [];
  const statsCache = await redisClient.get("stats");
  if (statsCache) {
    return res.status(200).send(JSON.parse(statsCache));
  }
  let playerId: number = 0;
  const playerIds: number[] = [];
  for (let player of players) {
    playerId = getPlayerId(player.playerName);
    playerIds.push(playerId);
    response.push({
      playerId: playerId,
      playerName: player.playerName,
      avatar: player.avatar,
    });
  }
  const getAllWL = await playerIds.map((p) => getPlayerWL(p));
  const allWLPlayers = await Promise.all(getAllWL);

  const result = response.map((stats, wl) =>
    Object.assign({}, stats, allWLPlayers[wl])
  );

  await redisClient.set("stats", JSON.stringify(result), { EX: 3600 });
  res.status(200).send(result);
});

app.listen(PORT, () => {
  console.log(`Application is live and listening on port ${PORT}`);
});
