export const getPlayerId = (playerName: string): number => {
  let playerId: number = 0;
  switch (playerName.trim().replace(/ /g, "")) {
    case "เดอะแจค" || "เดอะแจ็ค":
      playerId = 304906167;
      break;
    case "พี่ชาย" || "แอสเซนตี้ฝ่ายเคลม":
      playerId = 233284542;
      break;
    case "แครี่ที่ดีที่สุดในยุคนี้" || "เดอะนอส":
      playerId = 100719034;
      break;
    case "เดอะตี๋":
      playerId = 152744830;
      break;
    case "จิเบิก":
      playerId = 103902809;
      break;
    case "มอจี":
      playerId = 179551302;
      break;
    default:
      playerId = 0;
      break;
  }
  return playerId;
};

export const playerName: string[] = [
  "เดอะแจค",
  "พี่ชาย",
  "แครี่ที่ดีที่สุดในยุคนี้",
  "เดอะตี๋",
  "จิเบิก",
  "มอจี",
];
