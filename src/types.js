// @flow

/**
 * ! Arquivo contem tipos utilizados neste pequeno projeto
 * ! Geralmente se utiliza uma pasta com as tipagens,
 * ! mas devido ao tamanho disso, achei desnecessário,
 * ! né bbs
 */

export type StoreType = {
  WALLETS: WalletsType,
  PRICES: PricesType
};

export type PricesType = {
  brt: {
    data: CurrencyType,
    isLoading: Boolean,
    isFeched: Boolean
  },
  btc: {
    data: CurrencyType,
    isLoading: Boolean,
    isFeched: Boolean
  }
};

export type CurrencyType = {
  buy: number,
  sell: number,
  date: Date
};

export type WalletsType = {
  data: Array<WalletType>,
  isLoading: Boolean
};

export type WalletType = {
  name: String,
  amount: Number,
  type: "brt" | "btc"
};
