// @flow

import { PricesType, StoreType, CurrencyType, WalletType } from "../types";

const actions = ({ getState, setState }) => ({
  /**
   *
   *
   */
  async createWallet(state: StoreType, wallet: WalletType): StoreType {
    let walletToAdd = { ...wallet };

    walletToAdd.id = `${Date.now()}${Math.random(1, 1000).toFixed(0)}`;

    if( walletToAdd.type === 'btc' ){
      walletToAdd.amount = (Math.random(0, 1)).toFixed(8);
    }
    
    if(walletToAdd.type === 'brt'){
      walletToAdd.amount = (Math.random(1, 400)*100).toFixed(2);
    }

    return { WALLETS: { ...state.WALLETS, data: [...state.WALLETS.data, walletToAdd] } };
  }
});

export default actions;
