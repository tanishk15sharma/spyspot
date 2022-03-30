import axios from "axios";
import { getToken } from "./helper-utils";

const getWatchLaterArr = async () => {
  try {
    const { data } = await axios.get("/api/user/watchLater", {
      headers: {
        authorization: getToken(),
      },
    });
    console.log(data);
    return data.watchLater;
  } catch (err) {
    console.log(err);
  }
};

const addToWatchLater = async (video, setWatchLater, watchLater) => {
  if (watchLater.find((item) => item._id === video._id)) {
    alert("item is already on wishlist");
    return;
  }
  try {
    const { data } = await axios.post(
      "/api/user/watchLater",
      { video },
      { headers: { authorization: getToken() } }
    );
    setWatchLater(data.watchLater);
  } catch (err) {
    console.log(err);
  }
};

const removeFromWatchLater = async (id, setWatchLater) => {
  try {
    const { data } = await axios.delete(`/api/user/watchLater/${id}`, {
      headers: { authorization: getToken() },
    });
    setWatchLater(data.watchLater);
  } catch (err) {
    console.log(err);
  }
};

export { getWatchLaterArr, addToWatchLater, removeFromWatchLater };
