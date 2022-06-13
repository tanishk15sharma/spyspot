import React from "react";
import { Link } from "react-router-dom";
import { useUserVideos } from "../../contexts/user-videos";
import { dislikeVideo } from "../../utilities/likes-utils";
import { NoData } from "../no-data/NoData";
import "./LikeListing.css";
const LikeListing = () => {
  const { state, dispatch } = useUserVideos();

  return (
    <>
      {state.likes.length === 0 ? (
        <NoData />
      ) : (
        <div className="like-wrapper">
          {state.likes.map((video) => (
            <div className="like-card" key={video._id}>
              <Link to={`/videos/${video._id}`}>
                <div className="like-img-div">
                  <img
                    src={`https://i.ytimg.com/vi/${video._id}/maxresdefault.jpg`}
                    className="like-thumbnail"
                  />
                </div>
              </Link>
              <div className="like-options">
                <div className="like-title">{video.title}</div>
                <i
                  onClick={() => dislikeVideo(video._id, dispatch)}
                  className="fa-regular fa-thumbs-down like-icon"
                ></i>
              </div>
              <div className="like-type">{video.category}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export { LikeListing };
