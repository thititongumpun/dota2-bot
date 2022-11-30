import { getPlayerId } from "./../types/player";
import {
  Client,
  WebhookEvent,
  MessageAPIResponseBase,
  TextMessage,
} from "@line/bot-sdk";
import * as dotenv from "dotenv";
import { getPlayerWL } from "../services/getPlayerwl";
dotenv.config();

export const config = {
  channelAccessToken: process.env.CHANNELACCESSTOKEN || "",
  channelSecret: process.env.CHANNELSECRET || "",
};

const client: Client = new Client(config);

export const handleEvent = async (
  event: WebhookEvent
): Promise<MessageAPIResponseBase | undefined> => {
  if (event.type !== "message" || event.message.type !== "text") {
    return;
  }

  const { replyToken } = event;
  const { text } = event.message;

  const playerId = getPlayerId(text);

  const wl = await getPlayerWL(playerId);
  let textResponse: string = JSON.stringify(wl);
  if (playerId === 0 || playerId === undefined) {
    textResponse = "ไม่มีหรอกไอสัส";
  }

  const response: TextMessage = {
    type: "text",
    text: textResponse,
  };

  await client.replyMessage(replyToken, response);
};
