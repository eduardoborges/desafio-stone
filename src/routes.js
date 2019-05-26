import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import actions from "./actions";

import Wallets from "./screens/wallets";
import WalletCreate from './screens/wallet-create';

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
        <Route>
          <Route path="/wallets" component={Wallets} />
          <Route path="/wallets/create" component={WalletCreate} />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default connect(
  "",
  actions
)(AppRoutes);
