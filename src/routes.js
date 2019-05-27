import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "unistore/react";
import actions from "./actions";

import Wallets from "./screens/wallets";
import WalletCreate from './screens/wallet-create';
import WalletResume from './screens/wallet-resume'
import WalletSell from './screens/wallet-sell';
import Login from './screens/login'

import { Navbar } from "./components";

function AppRoutes({ getBtcPrice, getBrtPrice }) {
  useEffect(() => {
    getBtcPrice();
    getBrtPrice();
  });
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route>
          <Navbar />
          <Route path="/wallets" component={Wallets} />
          <Route path="/wallets/create" component={WalletCreate} />
          <Route path="/wallets/:id/resume" component={WalletResume} />
          <Route path="/wallets/:id/sell" component={WalletSell} />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default connect(
  "",
  actions
)(AppRoutes);
