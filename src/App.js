import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Videos,
  WatchLater,
  Like,
  VideoPlayer,
  Playlists,
  History,
} from "./pages";
import { UserLogin } from "./components/login/UserLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/videos" element={<Videos />} />
        <Route path="/videos/:videoId" element={<VideoPlayer />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/likes" element={<Like />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
