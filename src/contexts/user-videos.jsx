import { createContext, useContext, useEffect, useReducer } from "react";
import { getLikesArr } from "../utilities/likes-utils";
import { getWatchLaterArr } from "../utilities/watchlater-utils";
import { getAllVideos } from "../utilities/allvideos-utils";
const UserVideosContext = createContext();

const userVideosReducer = (state, action) => {
  switch (action.type) {
    case "SET_WATCHLATER":
      return { ...state, watchLater: action.payload };
    case "ADD_TO_WATCHLATER":
      return { ...state, watchLater: action.payload };
    case "REMOVE_FROM_WATCHLATER":
      return { ...state, watchLater: action.payload };
    case "SET_LIKES":
      return { ...state, likes: action.payload };
    case "ADD_TO_LIKES":
      return { ...state, likes: action.payload };
    case "REMOVE_FROM_LIKES":
      return { ...state, likes: action.payload };
    case "SET_VIDEOS":
      return { ...state, allVideos: action.payload };
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
    })();
  }, []);

  const [state, dispatch] = useReducer(userVideosReducer, {
    watchLater: [],
    likes: [],
    allVideos: [],
  });

  return (
    <UserVideosContext.Provider value={{ state, dispatch }}>
      {children}
    </UserVideosContext.Provider>
  );
};

const useUserVideos = () => useContext(UserVideosContext);

export { UserVideosProvider, useUserVideos };
