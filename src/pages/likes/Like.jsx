import React from "react";
import { LikeListing } from "../../components/like-dislike/LikeListing";
import { Nav } from "../../components/nav/Nav";
import { Sidebar } from "../../components/sidebar/Sidebar";

const Like = () => {
  return (
    <div>
      <div>
        <Nav />
        <Sidebar />
        <div>
          <LikeListing />
        </div>
      </div>
    </div>
  );
};

export { Like };
