import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'unistore/react';

import store from './store';
import AppRoutes from './routes';

const App = () => (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);
export default hot(App);
