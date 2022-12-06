export type Player = {
  win: number;
  lose: number;
};

export type StatsResponse = {
  playerId: number;
  playerName: string;
  avatar: string;
  wl: string | Player;
};