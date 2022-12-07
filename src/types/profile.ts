export type AccountProfile = {
  profile: Profile;
  solo_competitive_rank: number;
  competitive_rank: null;
  rank_tier: number;
  leaderboard_rank: null;
  mmr_estimate: MmrEstimate;
};

export type MmrEstimate = {
  estimate: number;
};

export type Profile = {
  account_id: number;
  personaname: string;
  plus: boolean;
  avatarfull: string;
  profileurl: string;
  loccountrycode: string;
};
