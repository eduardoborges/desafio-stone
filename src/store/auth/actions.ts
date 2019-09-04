import { Store } from 'unistore';
import { navigate } from '@reach/router';
import { AppState } from '../index';

const actions = (store:Store<AppState>) => ({

  handleLogin: async (state: AppState) => {
    store.setState({ AUTH: { ...state.AUTH, isLoading: true } });
    setTimeout(() => {
      store.setState({ AUTH: { ...state.AUTH, isAuth: true } });
      navigate('/exchange/wallets');
    }, 2000); // :P
  },

  handleCheckLogin: async (state:AppState) => {
    store.setState({ AUTH: { ...state.AUTH, isLoading: true } });
    setTimeout(() => {
      store.setState({ AUTH: { ...state.AUTH, isAuth: true, isLoading: false } });
    }, 2000); // :P
  },

  handleLogout: () => ({
    AUTH: {
      isAuth: false,
      isLoading: false,
    },
  }),

  handleRefreshToken: () => {
    // DUMP
  },
});


export default actions;
