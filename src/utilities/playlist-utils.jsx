import axios from "axios";
import { getToken } from "./helper-utils";
import toast from "react-hot-toast";

const getPlaylists = async () => {
  try {
    const { data } = await axios.get("/api/user/playlists", {
      headers: {
        authorization: getToken(),
      },
    });

    return data.playlists;
  } catch (err) {
    console.log(err);
  }
};

const createPlaylist = async (name, dispatch) => {
  try {
    const { data } = await axios.post(
      "/api/user/playlists",
      {
        playlist: { title: name, description: "This is playlist description" },
      },

      { headers: { authorization: getToken() } }
    );

    dispatch({ type: "ADD_TO_PLAYLISTS", payload: data.playlists });
    toast.success("New Playlist Created");
  } catch (err) {
    console.log(err);
    toast.error("Refresh and try again");
  }
};

const deletePlaylist = async (id, dispatch) => {
  try {
    const { data } = await axios.delete(`/api/user/playlists/${id}`, {
      headers: { authorization: getToken() },
    });
    dispatch({ type: "DELETE_FROM_PLAYLISTS", payload: data.playlists });
    toast.success("Playlist is Deleted");
  } catch (err) {
    console.log(err);
    toast.error("Refresh and try again");
  }
};

const addVideoToPlaylist = async (id, video, dispatch) => {
  try {
    const { data } = await axios.post(
      `/api/user/playlists/${id}`,
      { video },
      {
        headers: {
          authorization: getToken(),
        },
      }
    );

    dispatch({ type: "ADD_VIDEO", payload: data.playlist });
    toast.success("Video added to Playlist");
  } catch (err) {
    console.log(err);
    toast.error("Refresh and try again");
  }
};

const removeVideoFromPlaylist = async (playlistId, videoId, dispatch) => {
  try {
    const { data } = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      {
        headers: {
          authorization: getToken(),
        },
      }
    );
    dispatch({ type: "REMOVE_VIDEO", payload: data.playlist });
    toast.success("Video removed from Playlist");
  } catch (err) {
    console.log(err);
    toast.error("Refresh and try again");
  }
};

export {
  getPlaylists,
  createPlaylist,
  deletePlaylist,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
};
