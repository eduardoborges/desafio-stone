import createStore from "unistore";

const LOCAL_DATABASE_KEY = "@STONE_WALLETS_APP";
const currDatabase = localStorage.getItem(LOCAL_DATABASE_KEY);

const initialState = currDatabase
  ? {
      cotations: {
        usd: {}
      },
      wallets: {
        data: [],
        isLoading: false
      }
    }
  : JSON.parse(currDatabase);

let store =
  process.env.NODE_ENV === "production"
    ? createStore(initialState)
    : devtools(createStore(initialState));

store.subscribe(state => localStorage.setItem(LOCAL_DATABASE_KEY, JSON.stringify(state)));

export default store;
