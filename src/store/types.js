export type State = {
  AUTH: {
    isAuth: Boolean,
    token: String
  },
  USER: User,
  FOO: String
};

export type Store = {
  setState: string,
  getState: string
};
