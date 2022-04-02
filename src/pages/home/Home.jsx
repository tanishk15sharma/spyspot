import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-top">
      <div className="home">
        <aside className="home-aside">
          <p className="home-txt">
            Life In The Fast Lane, Let the{" "}
            <span className="highlight-txt">MADNESS</span> begin
            <span className="highlight-txt">!</span>
          </p>
          <button className="btn">EXPLORE</button>
        </aside>
        <div className="home-video">
          <div className="video">
            <iframe
              //   width="760"
              //   height="415"
              className="video-iframe"
              src="https://www.youtube.com/embed/a8Ng2btsXeI?controls=0&amp;start=193"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Home };
