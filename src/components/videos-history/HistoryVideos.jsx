import React from "react";
import { useUserVideos } from "../../contexts/user-videos";
import "./HistoryVideos.css";
const HistoryVideos = () => {
  const { state } = useUserVideos();
  return (
    <div className="history-container">
      <div className="history-info">
        this is history section
        <div>NO. </div>
        <button className="btn">CLEAR ALL </button>
      </div>
      <div className="wrap">
        {state.history.map((video) => (
          <div className="history-list">
            <div className="history-video">
              <div className="flex-history">
                <div className="xl-img">
                  <img
                    src={`https://i.ytimg.com/vi/${video._id}/maxresdefault.jpg`}
                    className="full-img"
                  />
                </div>
                <div>
                  <h2>{video.title}</h2>
                  <h2 className="light-name">{video.category}</h2>
                </div>
              </div>

              <i className="fa-solid fa-trash"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { HistoryVideos };
