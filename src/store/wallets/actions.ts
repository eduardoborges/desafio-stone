/* eslint-disable @typescript-eslint/no-unused-vars */

import { Store, ActionCreator } from 'unistore';
import { navigate } from '@reach/router';
import { AppState } from '../index';
import { WalletState, Wallet } from './types';

const actions = (store:Store<AppState>) => ({

  createWallet: async ({ WALLETS }: AppState, payload: Wallet) => ({
    WALLETS: {
      data: [...WALLETS.data, { id: Date.now(), ...payload }],
      isLoading: false,
    },
  }),

  removeWallet: ({ WALLETS }: AppState, wallet: Wallet) => ({
    WALLETS: {
      data: [...WALLETS.data.filter(w => wallet.id !== w.id)],
      isLoading: false,
    },
  }),

});


export default actions;
