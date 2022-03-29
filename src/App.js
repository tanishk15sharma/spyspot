import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VideoListing } from "./pages";
import { VideoPlayer } from "./components/video-player/VideoPlayer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/videos" element={<VideoListing />} />
        <Route path="/player" element={<VideoPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
