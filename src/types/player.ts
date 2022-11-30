export const getPlayerId = (playerName: string): number => {
  let playerId: number = 0;
  switch (playerName.trim().replace(/ /g,'')) {
    case playerName.match(/^แจค/)?.input || "เดอะแจค":
      playerId = 304906167;
      break;
    case playerName.match(/^บอล/)?.input || "พี่ชาย":
      playerId = 233284542;
      break;
    case playerName.match(/^นอส/)?.input || "แครี่ที่ดีที่สุดในยุคนี้":
      playerId = 100719034;
      break;
    case playerName.match(/^ตี๋/)?.input:
      playerId = 152744830;
      break;
    default:
      playerId = 0;
      break;
  }
  return playerId;
};
