export type Player = {
  win: number;
  lose: number;
};

export type StatusResponse = {
  playerId: number;
  name: string;
  wl: string | Player;
};