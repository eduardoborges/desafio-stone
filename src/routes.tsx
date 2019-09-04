import * as React from 'react';
import { Router, Redirect } from '@reach/router';

import ResumeWallet from 'screens/exchange/resume-wallet';
import Login from './screens/login';
import Exchange from './screens/exchange';
import Wallets from './screens/exchange/wallets';
import NewWallet from './screens/exchange/new-wallet';
import NewTransaction from './screens/exchange/new-transaction';

export default () => (
  <Router>
    <Redirect from="/" to="/login" />
    <Redirect from="/exchange" to="/exchange/wallets" />
    <Login path="/login" />
    <Exchange path="/exchange">
      <Wallets path="wallets">
        <NewWallet path="new" />
        <NewTransaction path=":id/transaction" />
        <ResumeWallet path=":id/resume" />
      </Wallets>
    </Exchange>
  </Router>
);
