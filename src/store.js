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
      isLoading: false
    },
    btc: {
      data: {
        buy: 0,
        sell: 0,
        date: Date
      },
      isLoading: false
    }
  },

  //
  WALLETS: {
    data: [],
    isLoading: false
  }
};

const initialState = currDatabase ? blankState : JSON.parse(currDatabase);

let store =
  process.env.NODE_ENV === "production" || process.env.NODE_ENV === "test"
    ? createStore(initialState)
    : devtools(createStore(initialState));

store.subscribe(state => localStorage.setItem(LOCAL_DATABASE_KEY, JSON.stringify(state)));

export default store;
