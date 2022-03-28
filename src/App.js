import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VideoListing } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/videos" element={<VideoListing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
