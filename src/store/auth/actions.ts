/* eslint-disable @typescript-eslint/no-unused-vars */

import { Store, ActionCreator } from 'unistore';
import { AppState } from '../index';
import { AuthState } from './types';

const actions = (store:Store<AppState>) => ({

  handleLogin: async (state: AppState) => {
    setTimeout(() => {
      store.setState({ AUTH: { ...state.AUTH, isAuth: true, isLoading: false } });
    }, 2000); // :P
  },

  handleCheckLogin: async (state:AppState) => {
    store.setState({ AUTH: { ...state.AUTH, isLoading: true } });
    setTimeout(() => {
      store.setState({ AUTH: { ...state.AUTH, isAuth: true, isLoading: false } });
    }, 2000); // :P
  },

  handleLogout: () => ({
    AUTH: {
      isAuth: false,
      isLoading: false,
    },
  }),

  handleRefreshToken: () => {
    // DUMP
  },
});


export default actions;
