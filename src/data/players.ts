type Player = {
  playerId: number;
  playerName: string;
  avatar: string;
  wl: WL;
};

type WL = {
  win: number;
  lose: number;
};

const { DOMAIN } = process.env;

export const players: Player[] = [
  {
    playerId: 0,
    playerName: "เดอะแจค",
    avatar:
    `${DOMAIN}/images/thejack.jpg`,
    wl: {
      win: 0,
      lose: 0,
    },
  },
  {
    playerId: 0,
    playerName: "พี่ชาย",
    avatar:
      `${DOMAIN}/images/peechai.jpg`,
    wl: {
      win: 0,
      lose: 0,
    },
  },
  {
    playerId: 0,
    playerName: "แครี่ที่ดีที่สุดในยุคนี้",
    avatar: `${DOMAIN}/images/thebest.jpg`,
    wl: {
      win: 0,
      lose: 0,
    },
  },
  {
    playerId: 0,
    playerName: "เดอะตี๋",
    avatar: `${DOMAIN}/images/thetee.jpg`,
    wl: {
      win: 0,
      lose: 0,
    },
  },
  {
    playerId: 0,
    playerName: "จิเบิก",
    avatar: `${DOMAIN}/images/jiberg.jpg`,
    wl: {
      win: 0,
      lose: 0,
    },
  },
  {
    playerId: 0,
    playerName: "มอจี",
    avatar: `${DOMAIN}/images/morg.jpg`,
    wl: {
      win: 0,
      lose: 0,
    },
  },
  {
    playerId: 0,
    playerName: "ไอเด็ก",
    avatar: `${DOMAIN}/images/dek.jpg`,
    wl: {
      win: 0,
      lose: 0,
    },
  },
  {
    playerId: 0,
    playerName: "xzenบ้องไม้ไผ่",
    avatar: `${DOMAIN}/images/xzen.jpg`,
    wl: {
      win: 0,
      lose: 0,
    },
  },
  {
    playerId: 0,
    playerName: "ไอฉิน",
    avatar: `${DOMAIN}/images/koon.jpg`,
    wl: {
      win: 0,
      lose: 0,
    },
  },
  {
    playerId: 0,
    playerName: "ไอชุน",
    avatar: `${DOMAIN}/images/koon.jpg`,
    wl: {
      win: 0,
      lose: 0,
    },
  },
  {
    playerId: 0,
    playerName: "เดอะนอส",
    avatar: `${DOMAIN}/images/thenos.jpg`,
    wl: {
      win: 0,
      lose: 0,
    },
  },
];
