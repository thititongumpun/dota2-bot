import express from "express";
import { defaultRoute } from "./default";
import { profileRoute } from "./profile";
import { statsRoute } from "./stats";
import { webhookRoute } from "./webhook";

export const routes = express.Router();

routes.use(defaultRoute);
routes.use(statsRoute);
routes.use(webhookRoute);
routes.use(profileRoute);