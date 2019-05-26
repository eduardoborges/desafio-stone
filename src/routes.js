import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "unistore/react";

import Wallets from "./screens/wallets";
import actions from "./actions";

import { Navbar } from "./components";

function AppRoutes({ getBtcPrice, getBrtPrice }) {
  useEffect(() => {
    getBtcPrice();
    getBrtPrice();
  }, []);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/wallets" component={Wallets} />
      </Switch>
    </Router>
  );
}

export default connect(
  "",
  actions
)(AppRoutes);
