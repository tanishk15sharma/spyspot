import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const LikeContext = createContext();

const LikeContextProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/user/likes", {
          headers: {
            authorization: token,
          },
        });
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const [like, setLike] = useState([]);
  return (
    <LikeContext.Provider value={{ like, setLike }}>
      {children}
    </LikeContext.Provider>
  );
};

const useLike = () => useContext(LikeContext);

export { LikeContextProvider, useLike };
