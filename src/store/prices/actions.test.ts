import store from 'store';
import actions from './actions';

describe('Prices Actions Tests', () => {
  it('Handle Get Prices', async () => {
    const state = store.getState();
    const { handleGetPrices } = actions(store);

    const resp = await handleGetPrices(state);
    await store.setState(resp);

    expect(store.getState().PRICES.BRT_BRL.buy).toBeGreaterThan(0);
    expect(store.getState().PRICES.BRT_BRL.sell).toBeGreaterThan(0);
    expect(store.getState().PRICES.BTC_BRT.buy).toBeGreaterThan(0);
    expect(store.getState().PRICES.BTC_BRT.sell).toBeGreaterThan(0);
  });
});
