import axios from "axios";
import { Player } from "../types/stats";

export const getPlayerWL = async (playerId: number | undefined) => {
  try {
    const { data } = await axios.get<Player>(
      `${process.env.APIPATH}/${playerId}/wl?limit=10`
    );
    return { playerId, wl: data };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log("error", err);
      return err.message;
    } else {
      console.log("unexpected error: ", err);
      return "An unexpected error occurred";
    }
  }
};
