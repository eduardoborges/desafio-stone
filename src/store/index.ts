import createStore from 'unistore';
import devtools from 'unistore/devtools';

import { TodoState } from './todo/types';
import { AuthState } from './auth/types';

export interface AppState {
  AUTH: AuthState,
  TODOS: TodoState,
}

const initialState: AppState = {
  AUTH: {
    isAuth: false,
    isLoading: true,
  },
  TODOS: {
    data: [],
    loading: false,
    error: false,
  },
};

const store = process.env.NODE_ENV === 'production'
  ? createStore(initialState) : devtools(createStore(initialState));

export default store;
