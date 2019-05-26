// @flow

import createStore from "unistore";
import devtools from "unistore/devtools";
import { StoreType } from "./types";

const LOCAL_DATABASE_KEY = "@STONE_WALLETS_APP";
const currDatabase = localStorage.getItem(LOCAL_DATABASE_KEY);

const blankState: StoreType = {
  //
  PRICES: {
    brt: {
      data: {
        buy: 0,
        sell: 0,
        date: Date
      },
      isLoading: false,
      isFeched: false
    },
    btc: {
      data: {
        buy: 0,
        sell: 0,
        date: Date
      },
      isLoading: false,
      isFeched: false
    }
  },

  //
  WALLETS: {
    data: [],
    isLoading: false,
    isFeched: false
  },

  // 
  TRANSACTIONS: {
    data: [],
    isLoading: false,
    isFeched: false
  }
};

const initialState =  blankState;

let store =
  process.env.NODE_ENV === "production" || process.env.NODE_ENV === "test"
    ? createStore(initialState)
    : devtools(createStore(initialState));

store.subscribe(state => localStorage.setItem(LOCAL_DATABASE_KEY, JSON.stringify(state)));

export default store;
