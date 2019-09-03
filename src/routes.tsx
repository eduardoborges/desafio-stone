import * as React from 'react';
import { Router, Redirect } from '@reach/router';

import Login from './screens/login';
import Exchange from './screens/exchange';
import Wallets from './screens/exchange/wallets';
import NewWallet from './screens/exchange/new-wallet';

export default () => (
  <Router>
    <Redirect from="/" to="/login" />
    <Login path="/login" />
    <Exchange path="/exchange">
      <Wallets path="wallets" />
      <NewWallet path="wallets/new" />
    </Exchange>
  </Router>
);
