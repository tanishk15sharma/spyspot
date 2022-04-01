import axios from "axios";
import { getToken } from "./helper-utils";

const getHistoryArr = async () => {
  try {
    const { data } = await axios.get("/api/user/history", {
      headers: {
        authorization: getToken(),
      },
    });
    return data.history;
  } catch (err) {
    console.log(err);
  }
};

export { getHistoryArr };
