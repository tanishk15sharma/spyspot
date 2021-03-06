import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { FilterContextProvider } from "./contexts/filters";
import { AuthContextProvider } from "./contexts/auth";
import { UserVideosProvider } from "./contexts/user-videos";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <FilterContextProvider>
        <UserVideosProvider>
          <App />
        </UserVideosProvider>
      </FilterContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
