import { getPlayerId, playersName } from "./types/player";
import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import { middleware, WebhookEvent } from "@line/bot-sdk";
import { getPlayerWL } from "./services/getPlayerwl";
import { config, handleEvent } from "./config/line";
import { StatusResponse } from "./types/playerwl";
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 8080;

app.use(morgan("tiny"));

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
  let response: StatusResponse[] = [];
  for (let player of playersName) {
    const playerId = getPlayerId(player);
    const playerWL = await getPlayerWL(playerId);
    response.push({ playerId: playerId, name: player, wl: playerWL });
  }
  res.status(200).send(response);
});

app.listen(PORT, () => {
  console.log(`Application is live and listening on port ${PORT}`);
});
