import React from "react";
import { useUserVideos } from "../../contexts/user-videos";
import { deleteHistoryVideo } from "../../utilities/history-utils";
import "./HistoryVideos.css";

const HistoryVideos = () => {
  const { state, dispatch } = useUserVideos();
  return (
    <div className="history-container">
      <div className="history-info">
        <span class="material-icons icon-highlight ">history</span>
        <div>
          <div className="txt-highlight">
            History Videos : {state.history.length}
          </div>
          <div>
            <button className="btn btn-square">CLEAR ALL </button>
          </div>
        </div>
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
