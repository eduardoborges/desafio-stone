

export interface PricesState {
  BTC_BRT: Price,
  BRT_BRL: Price
}

export interface Price {
  buy: number,
  sell: number
}

export interface PriceResponse {
  BTC: CurrencyResponse;
  USD: CurrencyResponse;
}


export interface CurrencyResponse {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: string;
}

export interface PricesActions {
  handleGetPrices():void
}
