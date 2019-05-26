import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'unistore/react';

import Wallets from "./screens/wallets";
import actions from "./actions";

function AppRoutes({ getBtcPrice, getBrtPrice }) {
  useEffect(()=> {
    getBtcPrice();
    getBrtPrice();
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/wallets" component={Wallets} />
      </Switch>
    </Router>
  );
}

export default connect('', actions)(AppRoutes);
