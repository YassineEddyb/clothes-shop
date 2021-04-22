import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import CollectionsOverview from "../../component/collections-overview/collections-overview.component";
import CollectionPage from "../category/collection.component";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import {
  selectIsFetching,
  selectCollectionsLoaded,
} from "../../redux/shop/shop.selectors";
import Spinner from "../../component/spinner/spinner.component";

const CollectionsOverviewWithSpinner = Spinner(CollectionsOverview);
const CollectionPageWithSpinner = Spinner(CollectionPage);

const ShopPage = ({ fetchCollectionsStart, match, isFetching, isLoaded }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={isFetching} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={!isLoaded} {...props} />
        )}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetching,
  isLoaded: selectCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
