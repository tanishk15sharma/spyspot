import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VideoListing } from "./pages";
import { VideoPlayer } from "./components/video-player/VideoPlayer";
import { UserLogin } from "./components/login/UserLogin";
import { WatchLater } from "./components/watch-later/WatchLater";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/videos" element={<VideoListing />} />
        <Route path="/player" element={<VideoPlayer />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/watchlater" element={<WatchLater />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
