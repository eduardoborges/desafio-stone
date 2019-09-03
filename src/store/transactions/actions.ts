/* eslint-disable consistent-return */
/* eslint-disable no-lonely-if */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Store, ActionCreator } from 'unistore';
import { navigate } from '@reach/router';
import { toast } from 'react-toastify';
import { Wallet } from 'store/wallets/types';
import dayjs from 'dayjs';
import { AppState } from '../index';
import { Transaction } from './types';

const actions = (store:Store<AppState>) => ({

  handleTransaction: (
    state: AppState, source: number, dest: number, amount: number,
  ) => {
    const wallets = [...state.WALLETS.data];
    const prices = { ...state.PRICES.BTC_BRT };

    // carteiras
    const walletSource = wallets.find(w => w.id === source) || undefined;
    const walletDestin = wallets.find(w => w.id === dest) || undefined;

    // checa se as carteiras existem
    if (walletSource !== undefined && walletDestin !== undefined) {
      // checa se a carteira de origem tem saldo
      if (walletSource.amount !== undefined && walletSource.amount >= amount) {
        // calcula o valor a ser somado na carteira origem fazendo a conversao
        const destAmount = walletSource.type === 'BTC' ? amount * prices.sell : amount * (1 / prices.buy);

        // faz a transacao, tirando e adicionando valores
        const walletsTransaction = wallets.map(w => (
          w.id === source ? { ...w, amount: w.amount - amount } : w
        )).map(w => (
          w.id === dest ? { ...w, amount: w.amount + destAmount } : w
        ));

        const transaction : Transaction = {
          id: Date.now(),
          walletDestination: dest,
          walletSource: source,
          time: dayjs(),
        };

        // salva na store
        store.setState({
          WALLETS: {
            ...state.WALLETS,
            data: walletsTransaction,
          },
        });

        // retorna pra store a transacao
        toast('Trancação efetuada!', { type: toast.TYPE.SUCCESS });
        return transaction;
      }
    } else {
      toast('Carteira de origem ou destino nao existe', { type: toast.TYPE.ERROR });
    }
  },
  //

});


export default actions;
