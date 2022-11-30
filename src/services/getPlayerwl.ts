import axios from "axios";
import { Player } from "../types/playerwl";

export const getPlayerWL = async (playerId: number) => {
  try {
    const { data } = await axios.get<Player>(
      `${process.env.APIPATH}/${playerId}/wl?limit=10`
    );
    return data;
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
