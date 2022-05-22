import axios from "axios";
import { getToken } from "./helper-utils";
import toast from "react-hot-toast";

const getLikesArr = async () => {
  try {
    const { data } = await axios.get("/api/user/likes", {
      headers: {
        authorization: getToken(),
      },
    });
    return data.likes;
  } catch (err) {
    console.log(err);
  }
};

const likeVideo = async (video, dispatch) => {
  try {
    const { data } = await axios.post(
      "/api/user/likes",
      { video },
      {
        headers: {
          authorization: getToken(),
        },
      }
    );
    dispatch({ type: "ADD_TO_LIKES", payload: data.likes });
    toast.success("Video Liked");
  } catch (err) {
    console.log(err);
    err.response.status === 409
      ? toast.error(err.response.data.errors)
      : toast.error("Please login");
  }
};

const dislikeVideo = async (id, dispatch) => {
  try {
    const { data } = await axios.delete(`/api/user/likes/${id}`, {
      headers: { authorization: getToken() },
    });
    dispatch({ type: "REMOVE_FROM_LIKES", payload: data.likes });
    toast.success("Video Disliked");
  } catch (err) {
    console.log(err);
    toast.error("Try Again");
  }
};
export { getLikesArr, likeVideo, dislikeVideo };
