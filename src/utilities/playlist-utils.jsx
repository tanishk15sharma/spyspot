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

const createPlaylist = async (name) => {
  try {
    const res = await axios.post(
      "/api/user/playlists",

      { playlist: name },
      { headers: { authorization: getToken() } }
    );
  } catch (err) {
    console.log(err);
  }
};

export { getPlaylists, createPlaylist };
