import React from "react";
import "./App.scss";

import { Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = (props) => {
  console.log(props);
  return (
    <div className="">
      <h1>hats page</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop/hats" component={HatsPage} />
    </div>
  );
}

export default App;
