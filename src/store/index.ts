import createStore from 'unistore';
import devtools from 'unistore/devtools';

import { AuthState } from './auth/types';
import { WalletState } from './wallets/types';

export interface AppState {
  AUTH: AuthState,
  WALLETS: WalletState,
}

const initialState: AppState = {
  AUTH: {
    isAuth: false,
    isLoading: true,
  },
  WALLETS: {
    data: [],
    isLoading: false,
  },
};

const store = process.env.NODE_ENV === 'production'
  ? createStore(initialState) : devtools(createStore(initialState));

export default store;
