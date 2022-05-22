import React, { useState } from "react";
import "./VideoCard.css";
import { useUserVideos } from "../../contexts/user-videos";
import { Link } from "react-router-dom";
import { likeVideo } from "../../utilities/likes-utils";
import { addToWatchLater } from "../../utilities/watchlater-utils";
import { addVideoToHistory } from "../../utilities/history-utils";

const VideoCard = ({ video }) => {
  const [toggleOptions, setToggleOptions] = useState(false);
  const { dispatch } = useUserVideos();
  return (
    <div className="video-card relative">
      <Link to={`/videos/${video._id}`}>
        <div
          className="video-img-div"
          onClick={() => addVideoToHistory(video, dispatch)}
        >
          <img
            src={`https://i.ytimg.com/vi/${video._id}/maxresdefault.jpg`}
            className="video-thumbnail"
          />
        </div>
      </Link>
      <div className="pd-sm flex-sb">
        <div className="video-title">{video.title}</div>
        <i
          className="fa-solid fa-ellipsis-vertical"
          onClick={() => setToggleOptions((val) => !val)}
        ></i>
      </div>
      <div
        className="video-options"
        style={{ display: !toggleOptions && "none" }}
      >
        <div
          className="option"
          onClick={() => addToWatchLater(video, dispatch)}
        >
          <i className="fa-solid fa-clock-rotate-left margin-r-sm"></i>
          Save to Watch Later
        </div>
        <div className="option" onClick={() => likeVideo(video, dispatch)}>
          <i className="fa-solid fa-thumbs-up margin-r-sm"></i>
          Like Video
        </div>
      </div>
      <div className="video-type">{video.category}</div>
    </div>
  );
};

export { VideoCard };
