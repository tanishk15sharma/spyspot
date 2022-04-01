import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFilters } from "../../contexts/filters";
import "./SuggestionChips.css";
const SuggestionChips = () => {
  const { filterDispatch } = useFilters();
  const [categories, setCategories] = useState([]);
  const [activeBtn, setActiveBtn] = useState("");

  useEffect(() => {
    setActiveBtn(categories.length !== 0 ? categories[0]._id : "");
  }, [categories]);

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
          // className="btn btn-round"
          className={`btn btn-round ${_id === activeBtn ? "active" : ""}   `}
          key={_id}
          onClick={() => {
            filterDispatch({ type: "CATEGORY", payload: categoryName });
            setActiveBtn(_id);
          }}
        >
          {categoryName}
        </button>
      ))}
    </div>
  );
};

export { SuggestionChips };
