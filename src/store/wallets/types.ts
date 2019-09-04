
export interface WalletState {
  data: Wallet[],
  isLoading: boolean
}

export interface Wallet {
  id?: number,
  name: string,
  amount: number,
  type: 'BTC' | 'BRT'
}

export interface WalletActions {
  createWallet(wallet: Wallet): void,
  removeWallet(wallet: Wallet): Wallet,
}
