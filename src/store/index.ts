import createStore from 'unistore';
// @ts-ignore
import persistStore from 'unissist';
// @ts-ignore
import localStorageAdapter from 'unissist/integrations/localStorageAdapter';
import devtools from 'unistore/devtools';

import { AuthState } from './auth/types';
import { WalletState } from './wallets/types';

export interface AppState {
  AUTH: AuthState,
  WALLETS: WalletState,
}

const adapter = localStorageAdapter();
const config = {

};

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

persistStore(store, adapter, config);

export default store;
