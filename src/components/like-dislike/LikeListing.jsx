import React from "react";
import { useLike } from "../../contexts/like-dislike";
import "./LikeListing.css";
const LikeListing = () => {
  const { like, setLike } = useLike();
  console.log(like);
  return (
    <div className="like-wrapper">
      {like.map((video) => (
        <div className="like-card">
          <div className="like-img-div">
            <img
              src={`https://i.ytimg.com/vi/${video._id}/maxresdefault.jpg`}
              className="like-thumbnail"
            />
          </div>

          <div className="like-options">
            <div className="like-title">{video.title}</div>
            <div className="like-icons">
              <i class="fa-solid fa-thumbs-up like-icon"></i>
              <i class="fa-regular fa-thumbs-down like-icon"></i>
            </div>
          </div>

          <div className="like-type">{video.category}</div>
        </div>
      ))}
    </div>
  );
};

export { LikeListing };
