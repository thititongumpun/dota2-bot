"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleEvent = exports.config = void 0;
const player_1 = require("./../types/player");
const bot_sdk_1 = require("@line/bot-sdk");
const dotenv = __importStar(require("dotenv"));
const getPlayerwl_1 = require("../services/getPlayerwl");
dotenv.config();
exports.config = {
    channelAccessToken: process.env.CHANNELACCESSTOKEN || "",
    channelSecret: process.env.CHANNELSECRET || "",
};
const client = new bot_sdk_1.Client(exports.config);
const handleEvent = (event) => __awaiter(void 0, void 0, void 0, function* () {
    if (event.type !== "message" || event.message.type !== "text") {
        return;
    }
    const { replyToken } = event;
    const { text } = event.message;
    const playerId = (0, player_1.getPlayerId)(text);
    const wl = yield (0, getPlayerwl_1.getPlayerWL)(playerId);
    let textResponse = JSON.stringify(wl);
    if (playerId === 0 || playerId === undefined) {
        textResponse = "ไม่มีหรอกไอสัส";
    }
    const response = {
        type: "text",
        text: textResponse,
    };
    yield client.replyMessage(replyToken, response);
});
exports.handleEvent = handleEvent;
