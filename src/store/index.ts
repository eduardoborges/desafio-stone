import createStore from 'unistore';
import devtools from 'unistore/devtools';

import { AuthState } from './auth/types';

export interface AppState {
  AUTH: AuthState,
}

const initialState: AppState = {
  AUTH: {
    isAuth: false,
    isLoading: true,
  },
};

const store = process.env.NODE_ENV === 'production'
  ? createStore(initialState) : devtools(createStore(initialState));

export default store;
