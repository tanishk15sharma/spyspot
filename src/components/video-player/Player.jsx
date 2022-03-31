import React from "react";
import { useParams } from "react-router-dom";
import { useUserVideos } from "../../contexts/user-videos";
import "./Player.css";

const Player = () => {
  const { videoId } = useParams();
  const { state } = useUserVideos();

  const video = state.allVideos.find((item) => item._id === videoId);
  if (!video) {
    return <h1>loading...........!!!!</h1>;
  }
  return (
    <div className="player-container">
      <div class="lds-hourglass"></div>
      <div className="player">
        <iframe
          width="100%"
          height="415"
          src={`https://www.youtube.com/embed/${video?._id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <div className="player-details">
          <div className="player-options">
            <div className="txt-xxl">{video.title}</div>
            <div>
              <span className="player-nav">
                <i className="fa-solid fa-plus player-icon"></i>
                Add to playlist
              </span>
              <span className="player-nav">
                <i className="fa-solid fa-thumbs-up player-icon"></i>
                Like
              </span>
              <span className="player-nav">
                <i className="fa-solid fa-clock-rotate-left player-icon"></i>
                watch later
              </span>
            </div>
          </div>
          <div className="video-type">{video.category}</div>
          <p className="video-desp">{video.description}</p>
        </div>
      </div>
    </div>
  );
};

export { Player };
