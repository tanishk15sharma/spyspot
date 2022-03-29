import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFilters } from "../../contexts/filters";
import "./SuggestionChips.css";
const SuggestionChips = () => {
  const { filterDispatch } = useFilters();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/categories");
        setCategories(data.categories);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="chips-div">
      {categories.map(({ categoryName, _id }) => (
        <button
          className="btn btn-round"
          key={_id}
          onClick={() =>
            filterDispatch({ type: "CATEGORY", payload: categoryName })
          }
        >
          {categoryName}
        </button>
      ))}
    </div>
  );
};

export { SuggestionChips };
