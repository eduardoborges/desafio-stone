/* eslint-disable @typescript-eslint/no-unused-vars */

import { Store, ActionCreator } from 'unistore';
import { navigate } from '@reach/router';
import { toast } from 'react-toastify';
import { Wallet } from 'store/wallets/types';
import { AppState } from '../index';

const actions = (store:Store<AppState>) => ({

  handleTransaction: (state: AppState, source: Wallet, dest: Wallet, amount: number) => {
    //
  },

});


export default actions;
