import React from "react";
import { useWatchLater } from "../../contexts/watch-later";
import "./WatchLaterListing.css";
const WatchLaterListing = () => {
  const { watchLater, setWatchLater } = useWatchLater();
  console.log(watchLater);
  return (
    <>
      {watchLater.map((video) => (
        <div className="horiz-card">
          <div className="sm-img-div">
            <img
              src={`https://i.ytimg.com/vi/${video._id}/maxresdefault.jpg`}
              className="full-img"
            />
          </div>
          <div className="horiz-infos">
            <p className="flex-space-btw">
              <span className="txt-xxl">{video.title}</span>
              <div>
                <i class="fa-regular fa-trash-can"></i>
              </div>
            </p>
            <div className="video-type">{video.category}</div>
            <p className="video-desp">{video.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export { WatchLaterListing };
