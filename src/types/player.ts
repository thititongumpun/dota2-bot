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
      playerId = 419877401;
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
    case "xzenบ้องไม้ไผ่":
      playerId = 107150877;
      break;
    case "ไอเด็ก":
      playerId = 178002536;
      break;
    case "ไอชุน":
      playerId = 203825222;
      break;
    case "ไอฉิน":
      playerId = 194723630;
      break;
    case "เดอะนอส":
      playerId = 100719034;
      break;
    default:
      playerId = 0;
      break;
  }
  return playerId;
};

export const playersName: string[] = [
  "เดอะแจค",
  "พี่ชาย",
  "แครี่ที่ดีที่สุดในยุคนี้",
  "เดอะตี๋",
  "จิเบิก",
  "มอจี",
  "xzenบ้องไม้ไผ่",
  "ไอชุน",
  "ไอชุน",
  "ไอฉิน",
  "เดอะนอส",
];
