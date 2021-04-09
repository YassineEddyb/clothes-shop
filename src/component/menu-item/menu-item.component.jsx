import React from "react";
import { withRouter, wthRouter } from "react-router-dom";

import "./menu-item.style.scss";

function MenuItem({ title, imageUrl, size, linkUrl, match, history }) {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => {
        history.push(`${match.url}${linkUrl}`);
      }}
    >
      <div
        className="background"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SEE MORE</span>
      </div>
      @
    </div>
  );
}

export default withRouter(MenuItem);
