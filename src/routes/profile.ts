import { getPlayerProfile } from "./../services/getPlayerProfile";
import { Router, Request, Response } from "express";

export const profileRoute = Router();

profileRoute.get("/profile/:playerId", async (req: Request, res: Response) => {
  const response = await getPlayerProfile(+req.params.playerId);
  res.status(200).send(response);
});
