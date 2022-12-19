import { producer } from './../config/kafka';
import { Router, Request, Response } from "express";

export const defaultRoute = Router();
defaultRoute.get("/", async (_: Request, res: Response): Promise<Response> => {
  return res.status(200).json({
    status: "success",
    message: "Connected successfully!",
  });
});