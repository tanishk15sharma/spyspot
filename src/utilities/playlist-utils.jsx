import axios from "axios";
import { getToken } from "./helper-utils";

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
    console.log(data);
    dispatch({ type: "ADD_TO_PLAYLISTS", payload: data.playlists });
  } catch (err) {
    console.log(err);
  }
};

const deletePlaylist = async (id, dispatch) => {
  try {
    const { data } = await axios.delete(`/api/user/playlists/${id}`, {
      headers: { authorization: getToken() },
    });
    dispatch({ type: "DELETE_FROM_PLAYLISTS", payload: data.playlists });
  } catch (err) {
    console.log(err);
  }
};
// playlist

const setPlaylist = async (id, setVideos) => {
  try {
    const res = await axios.get(`/api/user/playlists/${id}`, {
      headers: { authorization: getToken() },
    });
    console.log(res);
    // dispatch({ type: "SET_PLAYLIST", payload: data.playlist });
    setVideos(res.data.playlist.videos);
  } catch (err) {
    console.log(err);
  }
};

const addVideoToPlaylist = async (id, video) => {
  try {
    const res = await axios.post(
      `/api/user/playlists/${id}`,
      { video },
      {
        headers: {
          authorization: getToken(),
        },
      }
    );
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

const removeVideoFromPlaylist = async (playlistId, videoId) => {
  try {
    const res = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      {
        headers: {
          authorization: getToken(),
        },
      }
    );
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export {
  getPlaylists,
  createPlaylist,
  deletePlaylist,
  setPlaylist,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
};
