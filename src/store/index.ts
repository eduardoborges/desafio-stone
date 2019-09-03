import createStore from 'unistore';
// @ts-ignore
import persistStore from 'unissist';
// @ts-ignore
import localStorageAdapter from 'unissist/integrations/localStorageAdapter';
import devtools from 'unistore/devtools';

import { AuthState } from './auth/types';
import { WalletState } from './wallets/types';
import { PricesState } from './prices/types';

export interface AppState {
  AUTH: AuthState,
  WALLETS: WalletState,
  PRICES: PricesState,
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
  PRICES: {
    BTC_BRT: {
      buy: 10338.10,
      sell: 9000,
    },
  },
};

const store = process.env.NODE_ENV === 'production'
  ? createStore(initialState) : devtools(createStore(initialState));

persistStore(store, adapter, config);

export default store;
