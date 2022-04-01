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

const setPlaylist = async (id) => {
  console.log(id);
  try {
    const { data } = await axios.get(`/api/user/playlists/${id}`, {
      headers: { authorization: getToken() },
    });
    console.log(data.playlist);
    // dispatch({ type: "SET_PLAYLIST", payload: data.playlist });
  } catch (err) {
    console.log(err);
  }
};
export { getPlaylists, createPlaylist, deletePlaylist, setPlaylist };
