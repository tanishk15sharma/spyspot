import { createContext, useContext, useEffect, useReducer } from "react";
import { getLikesArr } from "../utilities/likes-utils";
import { getWatchLaterArr } from "../utilities/watchlater-utils";
import { getAllVideos } from "../utilities/allvideos-utils";
import { getPlaylists } from "../utilities/playlist-utils.jsx";
const UserVideosContext = createContext();

const userVideosReducer = (state, action) => {
  switch (action.type) {
    case "SET_WATCHLATER":
    // return { ...state, watchLater: action.payload };
    case "ADD_TO_WATCHLATER":
    // return { ...state, watchLater: action.payload };
    case "REMOVE_FROM_WATCHLATER":
      return { ...state, watchLater: action.payload };
    case "SET_LIKES":
    // return { ...state, likes: action.payload };
    case "ADD_TO_LIKES":
    // return { ...state, likes: action.payload };
    case "REMOVE_FROM_LIKES":
      return { ...state, likes: action.payload };
    case "SET_VIDEOS":
      return { ...state, allVideos: action.payload };
    case "SET_PLAYLISTS":
    // return { ...state, playlists: action.payload };
    case "ADD_TO_PLAYLISTS":
    // return { ...state, playlists: action.payload };
    case "TOGGLE_INPUT_BOX":
    // return { ...state, playlists: action.payload };
    case "DELETE_FROM_PLAYLISTS":
      return { ...state, playlists: action.payload };
    case "SET_PLAYLIST":
      console.log(action.payload);
      return { ...state, playlists: [...state.playlists, action.payload] };
    default:
      return state;
  }
};
const UserVideosProvider = ({ children }) => {
  useEffect(() => {
    (async () => {
      const allVideos = await getAllVideos();
      dispatch({ type: "SET_VIDEOS", payload: allVideos });
      const wishlist = await getWatchLaterArr();
      dispatch({ type: "SET_WATCHLATER", payload: wishlist });
      const likes = await getLikesArr();
      dispatch({ type: "SET_LIKES", payload: likes });
      const playlists = await getPlaylists();
      dispatch({ type: "SET_PLAYLISTS", payload: playlists });
    })();
  }, []);

  const [state, dispatch] = useReducer(userVideosReducer, {
    watchLater: [],
    likes: [],
    allVideos: [],
    playlists: [],
  });
  return (
    <UserVideosContext.Provider value={{ state, dispatch }}>
      {children}
    </UserVideosContext.Provider>
  );
};

const useUserVideos = () => useContext(UserVideosContext);

export { UserVideosProvider, useUserVideos };
