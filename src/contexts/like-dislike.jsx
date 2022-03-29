import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const LikeContext = createContext();

const LikeContextProvider = ({ children }) => {
  const [like, setLike] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/user/likes", {
          headers: {
            authorization: token,
          },
        });
        setLike(data.likes);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  console.log(like);
  return (
    <LikeContext.Provider value={{ like, setLike }}>
      {children}
    </LikeContext.Provider>
  );
};

const useLike = () => useContext(LikeContext);

export { LikeContextProvider, useLike };
