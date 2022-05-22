import React from "react";
import "./PageNotFound.css";
const PageNotFound = () => {
  return (
    <main className="error-page">
      <span class="material-icons error-icon">warning</span>
      <h1 className="error-text">SORRY ! PAGE NOT FOUND</h1>
    </main>
  );
};

export { PageNotFound };
