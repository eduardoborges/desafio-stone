import api from "./index";
import dayjs from "dayjs";

import { CurrencyType } from "../types";

type CotacaoRespType = {
  ticker: {
    buy: Number,
    sell: Number,
    high: Number,
    low: Number,
    vol: Number,
    last: Number,
    date: Number
  }
};

const prices = async (): CurrencyType => {
  const url = `https://www.mercadobitcoin.net/api/BTC/ticker/`;

  const resp = await api.get(url);
  const data: CotacaoRespType = resp.data;

  const price: CurrencyType = {
    buy: data.ticker.buy,
    sell: data.ticker.sell,
    date: dayjs(data.ticker.date)
  };

  return price;
};

export { prices };
