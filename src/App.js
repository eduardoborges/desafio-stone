import React from "react";
import { hot } from "react-hot-loader";
import { Provider } from "unistore/react";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Olá pessoas!</h1>
      </div>
    </Provider>
  );
}

export default hot(module)(App);
