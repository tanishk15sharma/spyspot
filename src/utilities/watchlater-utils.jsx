import axios from "axios";
import toast from "react-hot-toast";

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
    toast.success("Add to watch later");
  } catch (err) {
    console.log(err.response);
    err.response.status === 409
      ? toast.error(err.response.data.errors)
      : toast.error("Please login");
  }
};

const removeFromWatchLater = async (id, dispatch) => {
  try {
    const { data } = await axios.delete(`/api/user/watchLater/${id}`, {
      headers: { authorization: getToken() },
    });
    dispatch({ type: "REMOVE_FROM_WATCHLATER", payload: data.watchLater });
    toast.success("Video removed");
  } catch (err) {
    console.log(err);
    toast.error("Try again");
  }
};

export { getWatchLaterArr, addToWatchLater, removeFromWatchLater };
