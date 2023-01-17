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
      "https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.18169-9/13680805_1053307974746800_2985592324858977436_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=FF_GVSpLs-gAX_xfdPB&_nc_ht=scontent.fbkk2-7.fna&oh=00_AfD5ve0DTZicwf-8mqGK0FK-NjD4AgiUbm3q9ioQsRRq2g&oe=63B6D0CB",
    wl: {
      win: 0,
      lose: 0,
    },
  },
  {
    playerId: 0,
    playerName: "พี่ชาย",
    avatar:
      `${DOMAIN}/images/thejack.jpg`,
    wl: {
      win: 0,
      lose: 0,
    },
  },
  {
    playerId: 0,
    playerName: "แครี่ที่ดีที่สุดในยุคนี้",
    avatar: `${DOMAIN}/images/thebest.png`,
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
    avatar: `${DOMAIN}/images/jiberg.png`,
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
    avatar: `${DOMAIN}/images/thenos.png`,
    wl: {
      win: 0,
      lose: 0,
    },
  },
];
