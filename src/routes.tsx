import * as React from 'react';
import { Router, Redirect } from '@reach/router';

import Login from './screens/login';
import Exchange from './screens/exchange';
import Wallets from './screens/exchange/wallets';

export default () => (
  <Router>
    <Redirect from="/" to="/login" />
    <Login path="/login" />
    <Exchange path="/exchange">
      <Wallets path="wallets" />
    </Exchange>
  </Router>
);
