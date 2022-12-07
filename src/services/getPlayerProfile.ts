import axios from "axios";
import { AccountProfile } from "../types/profile";

export const getPlayerProfile = async (playerId: number | undefined) => {
  try {
    const { data } = await axios.get<AccountProfile>(
      `${process.env.APIPATH}/${playerId}`,
      {
        headers: {
          "Accept-Encoding": "application/json",
        },
      }
    );
    return data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log("error", err.message);
      return err.message;
    } else {
      console.log("unexpected error: ", err);
      return "An unexpected error occurred";
    }
  }
};
