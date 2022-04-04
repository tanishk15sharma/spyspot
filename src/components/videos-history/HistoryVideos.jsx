import React from "react";
import { useUserVideos } from "../../contexts/user-videos";
import {
  clearHistory,
  deleteHistoryVideo,
} from "../../utilities/history-utils";
import "./HistoryVideos.css";
import { Link } from "react-router-dom";

const HistoryVideos = () => {
  const { state, dispatch } = useUserVideos();
  return (
    <div className="history-container">
      <div className="history-info">
        <span className="material-icons icon-highlight ">history</span>
        <div>
          <div className="txt-highlight">
            History Videos : {state.history.length}
          </div>
          <div>
            <button
              className="btn btn-square"
              onClick={() => clearHistory(dispatch)}
            >
              CLEAR ALL
            </button>
          </div>
        </div>
      </div>
      <div className="wrap">
        {state.history.map((video) => (
          <div className="history-list" key={video._id}>
            <div className="history-video">
              <div className="flex-history">
                <div className="xl-img">
                  <Link to={`/videos/${video._id}`}>
                    <img
                      src={`https://i.ytimg.com/vi/${video._id}/maxresdefault.jpg`}
                      className="full-img"
                    />
                  </Link>
                </div>
                <div>
                  <h3>{video.title}</h3>
                  <h3 className="light-name">{video.category}</h3>
                </div>
              </div>

              <i
                className="fa-solid fa-trash"
                onClick={() => deleteHistoryVideo(video._id, dispatch)}
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { HistoryVideos };
