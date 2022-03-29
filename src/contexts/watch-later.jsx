import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const WatchLaterContext = createContext();

const WatchLaterProvider = ({ children }) => {
  const [watchLater, setWatchLater] = useState([]);
  const token = localStorage.getItem("token");
  console.log(token);
  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         const res = await axios.get("/api/user/watchlater", {
  //           headers: {
  //             authorization: token,
  //           },
  //         });
  //         console.log(res);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     })();
  //   }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/user/watchlater", {
          headers: { authorization: token },
        });
        // setWishList(data.wishlist);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <WatchLaterContext.Provider value={{ watchLater, setWatchLater }}>
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLater = () => useContext(WatchLaterContext);

export { WatchLaterProvider, useWatchLater };
