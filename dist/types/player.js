"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerId = void 0;
const getPlayerId = (playerName) => {
    var _a, _b, _c, _d;
    let playerId = 0;
    switch (playerName.trim().replace(/ /g, '')) {
        case ((_a = playerName.match(/^แจค/)) === null || _a === void 0 ? void 0 : _a.input) || "เดอะแจค":
            playerId = 304906167;
            break;
        case ((_b = playerName.match(/^บอล/)) === null || _b === void 0 ? void 0 : _b.input) || "พี่ชาย":
            playerId = 233284542;
            break;
        case ((_c = playerName.match(/^นอส/)) === null || _c === void 0 ? void 0 : _c.input) || "แครี่ที่ดีที่สุดในยุคนี้":
            playerId = 100719034;
            break;
        case (_d = playerName.match(/^ตี๋/)) === null || _d === void 0 ? void 0 : _d.input:
            playerId = 152744830;
            break;
        default:
            playerId = 0;
            break;
    }
    return playerId;
};
exports.getPlayerId = getPlayerId;
