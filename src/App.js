import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Videos,
  WatchLater,
  Like,
  VideoPlayer,
  Playlists,
  History,
  Home,
  PageNotFound,
} from "./pages";
import { UserLogin } from "./components/login/UserLogin";
import { RequiresAuth } from "./components/RequiresAuth";
import { Signup } from "../src/components/signup/Signup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/videos/:videoId" element={<VideoPlayer />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route
          path="/watchlater"
          element={
            <RequiresAuth>
              <WatchLater />
            </RequiresAuth>
          }
        />
        <Route
          path="/likes"
          element={
            <RequiresAuth>
              <Like />
            </RequiresAuth>
          }
        />
        <Route
          path="/playlists"
          element={
            <RequiresAuth>
              <Playlists />
            </RequiresAuth>
          }
        />
        <Route
          path="/history"
          element={
            <RequiresAuth>
              <History />
            </RequiresAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
