// @flow

import { PricesType, StoreType, CurrencyType } from "../types";
import { prices as brtPrices } from "../services/brtService";
import { prices as btcPrices } from "../services/btcService";

const actions = ({ getState, setState }) => ({
  /**
   *
   *
   */
  async getBrtPrice(state: StoreType): StoreType {
    const { PRICES } = state;
    await setState({ PRICES: { ...PRICES, brt: { ...PRICES.brt, isLoading: true } } });
    const prices: CurrencyType = await brtPrices();
    const out: StoreType = {
      PRICES: {
        ...PRICES,
        brt: {
          data: prices,
          isLoading: false,
          isFeched: true
        }
      }
    };
    return out;
  },

  /**
   *
   *
   */
  async getBtcPrice(state: StoreType): StoreType {
    const { PRICES } = state;
    await setState({ PRICES: { ...PRICES, btc: { ...PRICES.btc, isLoading: true } } });
    const prices: CurrencyType = await btcPrices();
    const out: StoreType = {
      PRICES: {
        ...PRICES,
        btc: {
          data: prices,
          isLoading: false,
          isFeched: true
        }
      }
    };
    return out;
  }
});

export default actions;
