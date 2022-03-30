import axios from "axios";
import { getToken } from "./helper-utils";

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
  } catch (err) {
    console.log(err);
    alert(err.response.data.errors);
  }
};

const dislikeVideo = async (id, dispatch) => {
  try {
    const { data } = await axios.delete(`/api/user/likes/${id}`, {
      headers: { authorization: getToken() },
    });
    dispatch({ type: "REMOVE_FROM_LIKES", payload: data.likes });
  } catch (err) {
    console.log(err);
  }
};
export { getLikesArr, likeVideo, dislikeVideo };
