/**
 * ! Arquivo contem tipos utilizados neste pequeno projeto
 * ! Geralmente se utiliza uma pasta com as tipagens,
 * ! mas devido ao tamanho disso, achei desnecessário,
 * ! né bbs
 */

type StoreType = {
  WALLETS: WalletsType,
  PRICES: PricesType
};

type PricesType = {
  brt: {
    data: CurrencyType,
    isLoading: Boolean
  },
  btc: {
    data: CurrencyType,
    isLoading: Boolean
  }
};

type CurrencyType = {
  buy: number,
  sell: number,
  date: Date
};

type WalletsType = {
  data: Array<WalletType>,
  isLoading: Boolean
};

type WalletType = {
  name: String,
  amount: Number,
  type: "brt" || "btc"
};

export { StoreType, PricesType, WalletType, WalletsType };
