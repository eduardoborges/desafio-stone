// @flow

import { PricesType, StoreType, CurrencyType } from "../types";
import { prices } from "../services/britaService";

const actions = ({ getState, setState }) => ({
  /**
   *
   *
   */
  async getBrtPrice({ PRICES: PricesType }): StoreType {
    setState({ PRICES: { ...PRICES., brt: { ...PRICES.brt, isLoading: true } } });
    const prices: CurrencyType = await prices();
    return const out: StoreType = {
      PRICES: {
        ...PRICES,
        brt: {
          data: prices,
          isLoading: false
        }
      }
    };
  }

  /**
   * 
   * 
   */
  async getBtcPrice({ PRICES: PricesType }): StoreType {
    setState({ PRICES: { ...PRICES., btc: { ...PRICES.btc, isLoading: true } } });
    const prices: CurrencyType = await prices();
    return const out: StoreType = {
      PRICES: {
        ...PRICES,
        btc: {
          data: prices,
          isLoading: false
        }
      }
    };
  }


});

export default actions;
