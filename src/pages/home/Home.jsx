import React, { useEffect } from "react";
import { useFilters } from "../../contexts/filters";
import { Link, useNavigate } from "react-router-dom";
import homeVideo from "../../assets/videoplayback.mp4";
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
    <>
      <video autoPlay muted loop className="landing-bg-video">
        <source src={homeVideo} type="video/mp4" />
      </video>
      <main className="banner">
        <div className="landing-info">
          <div className="home-logo">
            SPY
            <i className="fa-brands fa-reddit"></i>SPOT
          </div>
          <p className="home-txt">
            Life In The Fast Lane, Let the{" "}
            <span className="highlight-txt">MADNESS</span> begin
            <span className="highlight-txt">!</span>
          </p>
          <Link to="/videos">
            <button
              className="landing-btn"
              onClick={() =>
                filterDispatch({
                  type: "SET_ACTIVE_BUTTON",
                  payload: "All",
                })
              }
            >
              EXPLORE
            </button>
          </Link>

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
                    <span>{categoryName}</span>
                  </div>
                )
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export { Home };
