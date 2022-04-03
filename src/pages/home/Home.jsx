import React, { useEffect } from "react";
import { useFilters } from "../../contexts/filters";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";
const Home = () => {
  const navigate = useNavigate();
  const { filterState, filterDispatch } = useFilters();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/categories");
        filterDispatch({ type: "SET_CATEGORIES", payload: data.categories });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

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
            <button
              className="btn btn-round"
              onClick={() =>
                filterDispatch({ type: "SET_ACTIVE_BUTTON", payload: "All" })
              }
            >
              EXPLORE
            </button>
          </Link>
        </aside>
        <div className="home-video">
          <div className="video">
            <iframe
              className="video-iframe"
              src="https://www.youtube.com/embed/a8Ng2btsXeI?autoplay=1&amp;loop=1&amp;mute=1&amp;enablejsapi=1&amp;controls=0&amp;start=193"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <div className="category-box">
              {filterState.categories.map(
                ({ categoryName, _id }, index) =>
                  index < 4 && (
                    <div
                      key={_id}
                      className="home-category"
                      onClick={() => {
                        filterDispatch({
                          type: "CATEGORY",
                          payload: categoryName,
                        });
                        filterDispatch({
                          type: "SET_ACTIVE_BUTTON",
                          payload: _id,
                        });
                        navigate("/videos");
                      }}
                    >
                      {categoryName}
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Home };
