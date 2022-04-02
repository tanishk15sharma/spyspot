import React from "react";
import { useFilters } from "../../contexts/filters";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const navigate = useNavigate();
  const { filterDispatch } = useFilters();
  return (
    <div className="home-top">
      <div className="home-logo">
        SPY
        <i className="fa-brands fa-reddit"></i>SPOT
      </div>
      <div className="home">
        <aside className="home-aside">
          <p className="home-txt">
            Life In The Fast Lane, Let the{" "}
            <span className="highlight-txt">MADNESS</span> begin
            <span className="highlight-txt">!</span>
          </p>
          <Link to="/videos">
            <button className="btn btn-round">EXPLORE</button>
          </Link>
        </aside>
        <div className="home-video">
          <div className="video">
            <iframe
              className="video-iframe"
              src="https://www.youtube.com/embed/a8Ng2btsXeI?controls=0&amp;start=193"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="absolute-h">
            <div className="flex-box">
              <div
                className="home-category"
                onClick={() => {
                  filterDispatch({ type: "CATEGORY", payload: "3 Pointer" });
                  navigate("/videos");
                }}
              >
                3 Pointers
              </div>
              <div
                className="home-category"
                onClick={() => {
                  filterDispatch({ type: "CATEGORY", payload: "Dunk" });
                  navigate("./videos");
                }}
              >
                Dunk
              </div>
              <div
                className="home-category"
                onClick={() => {
                  filterDispatch({ type: "CATEGORY", payload: "Alley oops" });
                  navigate("./videos");
                }}
              >
                Alley Oops
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Home };
