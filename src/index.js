import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { FilterContextProvider } from "./contexts/filters";
import { AuthContextProvider } from "./contexts/auth";
import { WatchLaterProvider } from "./contexts/watch-later";
import { LikeContextProvider } from "./contexts/like-dislike";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <FilterContextProvider>
        <WatchLaterProvider>
          <LikeContextProvider>
            <App />
          </LikeContextProvider>
        </WatchLaterProvider>
      </FilterContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
