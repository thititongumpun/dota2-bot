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
      "https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.18169-9/11055370_10204484852744520_8235293693912471638_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ba80b0&_nc_ohc=pkiM85j083cAX-TDBi2&_nc_ht=scontent.fbkk2-7.fna&oh=00_AfA55k8gcpNygeLs33BHYHEesFzL5IlxfJ4T0DIW37g0jg&oe=63B6C475",
    wl: {
      win: 0,
      lose: 0,
    },
  },
  {
    playerId: 0,
    playerName: "แครี่ที่ดีที่สุดในยุคนี้",
    avatar: "https://f.ptcdn.info/980/025/000/1417055253-a111JPEG-o.jpg",
    wl: {
      win: 0,
      lose: 0,
    },
  },
  {
    playerId: 0,
    playerName: "เดอะตี๋",
    avatar:
      "https://scontent.fbkk2-8.fna.fbcdn.net/v/t31.18172-8/21427169_1574091365981112_6590226283885429977_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=oB7j1pBFzCUAX8hDsYV&_nc_oc=AQlKytLaOaAwVv20_Uz6N_nOIPmQFvIdA3qLxOW2NwC-6Qu_0SAXpCR8rIc0qZ5wDfw&_nc_ht=scontent.fbkk2-8.fna&oh=00_AfAomBeY58grwO4oDDMFrnF2UcwnR-OIz_ypNP0dvqIqrQ&oe=63B6CFD3",
    wl: {
      win: 0,
      lose: 0,
    },
  },
  {
    playerId: 0,
    playerName: "จิเบิก",
    avatar:
      "https://scontent.fbkk2-3.fna.fbcdn.net/v/t1.18169-9/531233_3494384441504_516968499_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ba80b0&_nc_ohc=oKcHH4KPdF0AX8RZvgX&_nc_ht=scontent.fbkk2-3.fna&oh=00_AfB6mDMoLtNdBn1pE-qRXpmMO1j7Fi7FMFUu_1MVvCyecA&oe=63B6BD4A",
    wl: {
      win: 0,
      lose: 0,
    },
  },
  {
    playerId: 0,
    playerName: "มอจี",
    avatar:
      "https://m.media-amazon.com/images/M/MV5BMGMyMGM4OTktMzg5NS00NGQ0LWI1MGEtZmE2NjJiODc0YjZmXkEyXkFqcGdeQXVyMjQ4MDgzMjQ@._V1_FMjpg_UX1000_.jpg",
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
    avatar:
      "https://avatars.akamai.steamstatic.com/1f12d71ecc4d0a1590829bdb429408e686c7827c_full.jpg",
    wl: {
      win: 0,
      lose: 0,
    },
  },
];
