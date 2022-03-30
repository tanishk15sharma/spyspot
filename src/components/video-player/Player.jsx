import React from "react";
import "./Player.css";
const Player = () => {
  return (
    <div className="player-container">
      <div className="player">
        <iframe
          width="100%"
          height="415"
          src="https://www.youtube.com/embed/upNmDWEpr4s"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <div className="player-details">
          <div className="player-options">
            <div className="txt-xxl">hello user</div>
            <div>
              <span className="player-nav">
                <i class="fa-solid fa-plus player-icon"></i>
                Add to playlist
              </span>
              <span className="player-nav">
                <i class="fa-solid fa-thumbs-up player-icon"></i>
                Like
              </span>
              <span className="player-nav">
                <i class="fa-solid fa-clock-rotate-left player-icon"></i>
                watch later
              </span>
            </div>
          </div>
          <div className="video-type">dunk</div>
          <p className="video-desp">
            Do This To Improve Your Programming Logic By 199% in 30 Days 🔥
            Problem-Solving Skills Improvement 🔥
          </p>
        </div>
      </div>
    </div>
  );
};

export { Player };
