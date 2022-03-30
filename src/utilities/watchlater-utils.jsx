import axios from "axios";

const addToWatchLater = async (video, setWatchLater, watchLater) => {
  const token = localStorage.getItem("token");
  if (watchLater.find((item) => item._id === video._id)) {
    alert("item is already on wishlist");
    return;
  }
  try {
    const { data } = await axios.post(
      "/api/user/watchLater",
      { video },
      { headers: { authorization: token } }
    );
    setWatchLater(data.watchLater);
  } catch (err) {
    console.log(err);
  }
};

const removeFromWatchLater = async (id, setWatchLater) => {
  const token = localStorage.getItem("token");

  try {
    const { data } = await axios.delete(`/api/user/watchLater/${id}`, {
      headers: { authorization: token },
    });
    setWatchLater(data.watchLater);
  } catch (err) {
    console.log(err);
  }
};

export { addToWatchLater, removeFromWatchLater };
