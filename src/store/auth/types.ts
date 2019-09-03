
export interface AuthState {
  isAuth: boolean,
  isLoading: boolean
}

export interface AuthActions {
  handleLogin(): void,
  handleCheckLogin(): void,
  handleLogout(): void,
  handleRefreshToken(): void
}
