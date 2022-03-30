import axios from "axios";
import { getToken } from "./helper-utils";

const getWatchLaterArr = async () => {
  try {
    const { data } = await axios.get("/api/user/watchLater", {
      headers: {
        authorization: getToken(),
      },
    });
    return data.watchLater;
  } catch (err) {
    console.log(err);
  }
};

const addToWatchLater = async (video, dispatch) => {
  try {
    const { data } = await axios.post(
      "/api/user/watchLater",
      { video },
      { headers: { authorization: getToken() } }
    );

    dispatch({ type: "ADD_TO_WATCHLATER", payload: data.watchLater });
  } catch (err) {
    console.log(err);
    alert(err.response.data.errors);
  }
};

const removeFromWatchLater = async (id, dispatch) => {
  try {
    const { data } = await axios.delete(`/api/user/watchLater/${id}`, {
      headers: { authorization: getToken() },
    });
    dispatch({ type: "REMOVE_FROM_WATCHLATER", payload: data.watchLater });
  } catch (err) {
    console.log(err);
  }
};

export { getWatchLaterArr, addToWatchLater, removeFromWatchLater };
