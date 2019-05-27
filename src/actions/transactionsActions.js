// @flow

import { StoreType, TransactionType } from "../types";
import { uniq } from "../utils";
const actions = ({ getState, setState }) => ({
  /**
   *
   *
   */
  async runSellTransaction(state: StoreType, payload: TransactionType): StoreType {
    let transaction = { ...payload };
    let wallets = [...state.WALLETS.data];

    wallets = wallets.map(w => {
      let wallet = { ...w };
      if (wallet.id === transaction.walletSource) {
        wallet.amount = Number(wallet.amount) - Number(transaction.amount);
      }
      if (wallet.id === transaction.walletDestination) {
        wallet.amount = Number(wallet.amount) + Number(transaction.finalAmount);
      }
      return wallet;
    });

    transaction.id = uniq();
    transaction.date = new Date();

    const out = {
      WALLETS: { ...state.WALLETS, data: [...wallets] },
      TRANSACTIONS: { ...state.TRANSACTIONS, data: [...state.TRANSACTIONS.data, transaction] }
    };

    return out;
  }
});

export default actions;
