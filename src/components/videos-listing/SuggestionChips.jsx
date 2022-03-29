import React from "react";
import "./SuggestionChips.css";
const SuggestionChips = () => {
  return (
    <div className="chips-div">
      <button className="btn btn-round">All</button>
      <button className="btn btn-round">Fundementals</button>
      <button className="btn btn-round">3pointes</button>
      <button className="btn btn-round">Dunk</button>
      <button className="btn btn-round">Ankle Breakers</button>
      <button className="btn btn-round">10 Best highlights</button>
    </div>
  );
};

export { SuggestionChips };
