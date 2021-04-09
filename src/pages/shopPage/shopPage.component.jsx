import React, { Component } from "react";
import CollectionPreview from "../../component/collection-preveiw/collection-preview.component.jsx";

import SHOP_DATA from "./shopData";

export class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...collectionProps }) => (
          <CollectionPreview key={id} {...collectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
