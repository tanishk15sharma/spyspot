import React from "react";
import { useUserVideos } from "../../contexts/user-videos";
import { dislikeVideo } from "../../utilities/likes-utils";
import "./LikeListing.css";
const LikeListing = () => {
  const { state, dispatch } = useUserVideos();
  console.log(state.likes);
  return (
    <div className="like-wrapper">
      {state.likes.map((video) => (
        <div className="like-card" key={video._id}>
          <div className="like-img-div">
            <img
              src={`https://i.ytimg.com/vi/${video._id}/maxresdefault.jpg`}
              className="like-thumbnail"
            />
          </div>

          <div className="like-options">
            <div className="like-title">{video.title}</div>
            <div className="like-icons">
              <i className="fa-solid fa-thumbs-up like-icon"></i>
              <i
                onClick={() => dislikeVideo(video._id, dispatch)}
                className="fa-regular fa-thumbs-down like-icon"
              ></i>
            </div>
          </div>

          <div className="like-type">{video.category}</div>
        </div>
      ))}
    </div>
  );
};

export { LikeListing };
