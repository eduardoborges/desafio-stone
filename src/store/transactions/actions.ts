/* eslint-disable consistent-return */
/* eslint-disable no-lonely-if */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Store } from 'unistore';
import { toast } from 'react-toastify';
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
        const destAmount = walletSource.type === 'BTC' ? amount * prices.sell : Number((amount * (1 / prices.buy)).toFixed(8));

        // faz a transacao, tirando e adicionando valores
        const walletsTransaction = wallets.map(w => (
          w.id === source ? { ...w, amount: Number(w.amount) - Number(amount) } : w
        )).map(w => (
          w.id === dest ? { ...w, amount: Number(w.amount) + Number(destAmount) } : w
        ));

        const transaction : Transaction = {
          amount,
          id: Date.now(),
          walletDestination: dest,
          walletSource: source,
          time: dayjs(),
          finalAmout: destAmount,
        };

        // retorna pra store a transacao
        toast('Trancação efetuada!', { type: toast.TYPE.SUCCESS });

        // retorna tudo para a store
        return {
          WALLETS: {
            ...state.WALLETS,
            data: walletsTransaction,
          },
          TRANSACTIONS: {
            ...state.TRANSACTIONS,
            data: [...state.TRANSACTIONS.data, transaction],
          },
        };
      }
    } else {
      toast('Carteira de origem ou destino nao existe', { type: toast.TYPE.ERROR });
    }
  },
  //

});


export default actions;
