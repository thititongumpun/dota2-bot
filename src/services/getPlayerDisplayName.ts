import axios from "axios";
import {LineUserResponse} from '../types/lineUser';

export const getPlayerDisplayName = async (userId: string | undefined) => {
  try {
    const { data } = await axios.get<LineUserResponse>(
      `${process.env.LINEAPIURL}/${userId}`
    );
    return { data};
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