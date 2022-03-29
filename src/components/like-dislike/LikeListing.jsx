import React from "react";
import { useLike } from "../../contexts/like-dislike";

const LikeListing = () => {
  const { like, setLike } = useLike();

  return <div>LikeListing</div>;
};

export { LikeListing };
