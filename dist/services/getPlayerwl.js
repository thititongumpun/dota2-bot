"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerWL = void 0;
const axios_1 = __importDefault(require("axios"));
const getPlayerWL = (playerId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield axios_1.default.get(`${process.env.APIPATH}/${playerId}/wl?limit=10`);
        return data;
    }
    catch (err) {
        if (axios_1.default.isAxiosError(err)) {
            console.log("error", err);
            return err.message;
        }
        else {
            console.log("unexpected error: ", err);
            return "An unexpected error occurred";
        }
    }
});
exports.getPlayerWL = getPlayerWL;
