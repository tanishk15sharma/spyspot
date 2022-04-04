import React from "react";
import { useUserVideos } from "../../contexts/user-videos";
import { removeFromWatchLater } from "../../utilities/watchlater-utils";
import "./WatchLaterListing.css";
import { Link } from "react-router-dom";
const WatchLaterListing = () => {
  const { state, dispatch } = useUserVideos();

  return (
    <>
      {state.watchLater.map((video) => (
        <div className="horiz-card" key={video._id}>
          <Link to={`/videos/${video._id}`}>
            <div className="sm-img-div">
              <img
                src={`https://i.ytimg.com/vi/${video._id}/maxresdefault.jpg`}
                className="full-img"
              />
            </div>
          </Link>
          <div className="horiz-infos">
            <div className="flex-space-btw">
              <span className="txt-xxl">{video.title}</span>
              <div>
                <p onClick={() => removeFromWatchLater(video._id, dispatch)}>
                  <i className="fa-solid fa-trash"></i>
                </p>
              </div>
            </div>
            <div className="video-type">{video.category}</div>
            <p className="video-desp">{video.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export { WatchLaterListing };
