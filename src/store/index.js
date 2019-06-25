// @flow
import packageJson from "../../package.json";
import createStore from "unistore";
import devtools from "unistore/devtools";
import { State } from "./types";

const LOCAL_DATABASE_KEY = `@${packageJson.name}`;
const currDatabase = localStorage.getItem(LOCAL_DATABASE_KEY);

const blankState: State = {
  AUTH: {
    isAuth: false,
    token: null
  },
  USER: {
    isLoading: false
  },
  FOO: "BAR"
};

// const initialState =
//   currDatabase === null ? blankState : JSON.parse(currDatabase);

const initialState = blankState;

let store =
  process.env.NODE_ENV === "production" || process.env.NODE_ENV === "test"
    ? createStore(initialState)
    : devtools(createStore(initialState));

store.subscribe(state =>
  localStorage.setItem(LOCAL_DATABASE_KEY, JSON.stringify(state))
);

export default store;
