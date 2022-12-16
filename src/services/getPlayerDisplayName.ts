import axios from "axios";
import { LineUserResponse } from '../types/lineUser';

export const getPlayerDisplayName = async (userId: string | undefined): Promise<LineUserResponse | string> => {
  try {
    const { data } = await axios.get<LineUserResponse>(
      `${process.env.LINEAPIURL}/${userId}`, {
        headers: {
          "Authorization": `Bearer ${process.env.CHANNELACCESSTOKEN}`,
        },
      }
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