import { hot } from 'react-hot-loader/root';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'unistore/react';
import store from './store';
import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <>
      <Routes />
      <ToastContainer />
    </>
  </Provider>
);

export default hot(App);
