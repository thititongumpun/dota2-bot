import { Router, Request, Response } from "express";
import { redisClient } from "../config/redis";
import { players } from "../data/players";
import { getPlayerWL } from "../services/getPlayerwl";
import { getPlayerId } from "../types/player";
import { StatsResponse } from "../types/stats";

export const statsRoute = Router();

statsRoute.get("/stats", async (_: Request, res: Response) => {
  let response: StatsResponse[] = [];
  const statsCache = await redisClient.get("stats");
  if (statsCache) {
    return res.status(200).send(JSON.parse(statsCache));
  }
  let playerId: number = 0;
  const playerIds: number[] = [];
  for (let i = 0; i < players.length; i++) {
    playerId = getPlayerId(players[i].playerName);
    playerIds.push(playerId);
    response.push({
      playerId: playerId,
      playerName: players[i].playerName,
      avatar: players[i].avatar,
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
