import React from "react";

import "./collection-item.style.scss";

const CollectionItem = ({ id, name, imageUrl, price }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span>{name}</span>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
