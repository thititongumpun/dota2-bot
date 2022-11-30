export const getPlayerId = (playerName: string): number => {
  let playerId: number = 0;
  switch (playerName.trim().replace(/ /g, "")) {
    case "เดอะแจค":
      playerId = 304906167;
      break;
    case "พี่ชาย":
      playerId = 233284542;
      break;
    case "แครี่ที่ดีที่สุดในยุคนี้":
      playerId = 100719034;
      break;
    case "เดอะตี๋":
      playerId = 152744830;
      break;
    default:
      playerId = 0;
      break;
  }
  return playerId;
};

export const playerName: string[] = ["เดอะแจค", "พี่ชาย", "แครี่ที่ดีที่สุดในยุคนี้", "เดอะตี๋"];
