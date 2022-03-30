import React from "react";
import { useLike } from "../../contexts/like-dislike";
import { dislikeVideo } from "../../utilities/likes-utils";
import "./LikeListing.css";
const LikeListing = () => {
  const { like, setLike } = useLike();

  return (
    <div className="like-wrapper">
      {like.map((video) => (
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
                onClick={() => dislikeVideo(video._id, setLike)}
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
