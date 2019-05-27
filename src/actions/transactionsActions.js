// @flow

import { PricesType, StoreType, CurrencyType, WalletType, TransactionType } from "../types";
import { uniq } from "../utils";
const actions = ({ getState, setState }) => ({
  /**
   *
   *
   */
  async runSellTransaction(state: StoreType, payload: TransactionType): StoreType {
    let transaction = { ...payload };

    transaction.id = uniq();
    transaction.date = new Date();

    return {
      TRANSACTIONS: { ...state.TRANSACTIONS, data: [...state.TRANSACTIONS.data, transaction] }
    };
  }
});

export default actions;
