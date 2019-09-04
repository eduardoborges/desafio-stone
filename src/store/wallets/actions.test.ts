import store from 'store';
import actions from './actions';

describe('Wallets Actions Tests', () => {
  const initialAmount = 10000;

  const wallet1 = {
    id: 1, name: 'Carteira 1', type: 'BRT', amount: initialAmount,
  };

  const wallet2 = {
    id: 2, name: 'Carteira 2', type: 'BTC', amount: initialAmount,
  };


  it('Create new Wallet', async () => {
    const { createWallet } = actions(store);

    // @ts-ignore
    await store.setState(await createWallet(store.getState(), wallet1));
    // @ts-ignore
    await store.setState(await createWallet(store.getState(), wallet2));

    expect(await store.getState().WALLETS.data).toHaveLength(2);
  });


  it('Remove Wallet', async () => {
    const { createWallet, removeWallet } = actions(store);

    store.setState({ WALLETS: { ...store.getState().WALLETS, data: [] } });
    // @ts-ignore
    store.setState(await createWallet(await store.getState(), wallet1));
    // @ts-ignore
    store.setState(await createWallet(await store.getState(), wallet2));

    expect(store.getState().WALLETS.data).toHaveLength(2);

    // @ts-ignore
    await store.setState(removeWallet(store.getState(), wallet1));
    // @ts-ignore
    await store.setState(removeWallet(store.getState(), wallet2));

    expect(await store.getState().WALLETS.data).toHaveLength(0);
  });
});
