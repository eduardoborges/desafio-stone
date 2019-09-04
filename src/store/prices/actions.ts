import { Store } from 'unistore';
import { getPrices } from 'services/prices';
import { AppState } from '../index';
import { PriceResponse } from './types';

const formatPrice = (price:string) => Number(Number(price.replace('.', '').replace(',', '.')).toFixed(2));

const actions = (store:Store<AppState>) => ({

  handleGetPrices: async (state: AppState) => {
    const prices : PriceResponse = await getPrices();
    return {
      PRICES: {
        ...state.PRICES,
        BTC_BRT: {
          sell: formatPrice(prices.BTC.ask),
          buy: formatPrice(prices.BTC.bid),
        },
        BRT_BRL: {
          sell: formatPrice(prices.USD.ask),
          buy: formatPrice(prices.USD.bid),
        },
      },
    };
  },

});


export default actions;
