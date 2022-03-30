import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Videos, WatchLater, Like, VideoPlayer } from "./pages";
import { UserLogin } from "./components/login/UserLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/videos" element={<Videos />} />
        <Route path="/player" element={<VideoPlayer />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/likes" element={<Like />} />
        <Route path="/player" element={<VideoPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
