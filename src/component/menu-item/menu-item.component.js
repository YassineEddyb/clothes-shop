import React from "react";

import "./menu-item.style.scss";

function MenuItem({ title, imageUrl, size }) {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className="background"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SEE MORE</span>
      </div>
    </div>
  );
}

export default MenuItem;
