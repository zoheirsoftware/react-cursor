import React, { useState } from "react";
import MyStor from "./MyStor";
import { Provider } from "react-redux";
import store from "../redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <MyStor />
      </div>
    </Provider>
  );
};

export default App;
