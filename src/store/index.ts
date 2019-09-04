import createStore from 'unistore';
// @ts-ignore
import persistStore from 'unissist';
// @ts-ignore
import localStorageAdapter from 'unissist/integrations/localStorageAdapter';
import devtools from 'unistore/devtools';

import { AuthState } from './auth/types';
import { WalletState } from './wallets/types';
import { PricesState } from './prices/types';
import { TransactionState } from './transactions/types';

export interface AppState {
  AUTH: AuthState,
  WALLETS: WalletState,
  TRANSACTIONS: TransactionState,
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
  TRANSACTIONS: {
    data: [],
    isLoading: false,
  },
  PRICES: {
    BTC_BRT: {
      buy: 0,
      sell: 0,
    },
    BRT_BRL: {
      buy: 0,
      sell: 0,
    },
  },
};

const store = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test'
  ? createStore(initialState) : devtools(createStore(initialState));

persistStore(store, adapter, config);

export default store;
