import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const WatchLaterContext = createContext();

const WatchLaterProvider = ({ children }) => {
  const [watchLater, setWatchLater] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/user/watchLater", {
          headers: {
            authorization: token,
          },
        });
        setWatchLater(data.watchLater);
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
