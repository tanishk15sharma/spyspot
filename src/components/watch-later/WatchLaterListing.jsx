import React from "react";
import { useWatchLater } from "../../contexts/watch-later";
import { removeFromWatchLater } from "../../utilities/watchlater-utils";
import "./WatchLaterListing.css";
const WatchLaterListing = () => {
  const { watchLater, setWatchLater } = useWatchLater();
  console.log(watchLater);

  return (
    <>
      {watchLater.map((video) => (
        <div className="horiz-card" key={video._id}>
          <div className="sm-img-div">
            <img
              src={`https://i.ytimg.com/vi/${video._id}/maxresdefault.jpg`}
              className="full-img"
            />
          </div>
          <div className="horiz-infos">
            <div className="flex-space-btw">
              <span className="txt-xxl">{video.title}</span>
              <div>
                <p
                  onClick={() =>
                    removeFromWatchLater(video._id, setWatchLater, watchLater)
                  }
                >
                  <i className="fa-regular fa-trash-can"></i>
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
