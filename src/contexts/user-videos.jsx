import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import { getWatchLaterArr } from "../utilities/watchlater-utils";

const UserVideosContext = createContext();

const userVideosReducer = (state, action) => {
  switch (action.type) {
    case "SET_WATCHLATER":
      return { ...state, watchLater: action.payload };
    case "ADD_TO_WATCHLATER":
      return { ...state, watchLater: action.payload };
    case "REMOVE_FROM_WATCHLATER":
      return { ...state, watchLater: action.payload };
    default:
      return state;
  }
};

const UserVideosProvider = ({ children }) => {
  useEffect(() => {
    (async () => {
      const wishlist = await getWatchLaterArr();
      dispatch({ type: "SET_WATCHLATER", payload: wishlist });
    })();
  }, []);

  const [state, dispatch] = useReducer(userVideosReducer, {
    watchLater: [],
    likes: [],
  });

  return (
    <UserVideosContext.Provider value={{ state, dispatch }}>
      {children}
    </UserVideosContext.Provider>
  );
};

const useUserVideos = () => useContext(UserVideosContext);

export { UserVideosProvider, useUserVideos };
