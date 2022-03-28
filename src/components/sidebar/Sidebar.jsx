import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <i class="fa-solid fa-bars"></i>
      </div>
      <div>
        <i class="fa-solid fa-house-chimney"></i>
      </div>
      <div>
        <i class="fa-solid fa-folder-plus"></i>
      </div>
      <div>
        <i class="fa-solid fa-thumbs-up"></i>
      </div>
      <div>
        <i class="fa-solid fa-clock-rotate-left"></i>
      </div>
      <div>
        <i class="fa-solid fa-bookmark"></i>
      </div>
    </div>
  );
};

export { Sidebar };
