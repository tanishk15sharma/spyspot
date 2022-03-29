import { createContext, useContext, useEffect, useState } from "react";

const LikeContext = createContext();

const LikeContextProvider = ({ children }) => {
  const [like, setLike] = useState([]);
  return (
    <LikeContext.Provider value={{ like, setLike }}>
      {children}
    </LikeContext.Provider>
  );
};

const useLike = () => useContext(LikeContext);

export { LikeContextProvider, useLike };
