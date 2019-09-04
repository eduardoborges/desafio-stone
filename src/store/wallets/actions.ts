/* eslint-disable @typescript-eslint/no-unused-vars */

import { Store, ActionCreator } from 'unistore';
import { navigate } from '@reach/router';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { AppState } from '../index';
import { WalletState, Wallet } from './types';


const actions = (store:Store<AppState>) => ({

  createWallet: async ({ WALLETS }: AppState, payload: Wallet) => {
    const schema = Yup.object().shape({
      id: Yup.number(),
      name: Yup.string().min(4).required(),
      amout: Yup.number(),
      type: Yup.string().oneOf(['BTC', 'BRT']).required(),
    });

    if (schema.isValidSync(payload)) {
      toast('Carteira criada.', { type: toast.TYPE.SUCCESS });
      return ({
        WALLETS: {
          data: [...WALLETS.data, { id: Date.now(), amount: 10000, ...payload }],
          isLoading: false,
        },
      });
    }
    return { WALLETS };
  },

  removeWallet: ({ WALLETS }: AppState, wallet: Wallet) => ({
    WALLETS: {
      data: [...WALLETS.data.filter(w => wallet.id !== w.id)],
      isLoading: false,
    },
  }),

});


export default actions;
