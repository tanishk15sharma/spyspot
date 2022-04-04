import axios from "axios";
import React, { useEffect } from "react";
import { useFilters } from "../../contexts/filters";
import "./SuggestionChips.css";
const SuggestionChips = () => {
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
    <div className="chips-div">
      {filterState.categories.map(({ categoryName, _id }) => (
        <button
          className={`btn btn-round ${
            _id === filterState.activeBtn ||
            categoryName === filterState.activeBtn
              ? "active"
              : ""
          }`}
          key={_id}
          onClick={() => {
            filterDispatch({ type: "CATEGORY", payload: categoryName });
            filterDispatch({ type: "SET_ACTIVE_BUTTON", payload: _id });
          }}
        >
          {categoryName}
        </button>
      ))}
    </div>
  );
};

export { SuggestionChips };
