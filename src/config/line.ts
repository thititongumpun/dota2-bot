import { producer } from './kafka';
import { getPlayerDisplayName } from './../services/getPlayerDisplayName';
import { getPlayerId, playersName } from "./../types/player";
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
  const { userId } = event.source;

  const playerId = getPlayerId(text);

  const wl = await getPlayerWL(playerId);
  let textResponse: string = JSON.stringify(wl);

  const produceMsg = {
    msg: text,
    response: wl
  }

  await producer.connect();
  await producer.send({
    topic: "apireq",
    messages: [
      {
        key: userId,
        value: JSON.stringify(produceMsg)
      }
    ]
  })

  if (playersName.indexOf(text) > -1) {
    const response: TextMessage = {
      type: "text",
      text: textResponse,
    };

    await client.replyMessage(replyToken, response);
  }
};
