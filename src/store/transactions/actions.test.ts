
import store from 'store';
import { Wallet } from 'store/wallets/types';
import transactionsActions from './actions';
import walletsActions from '../wallets/actions';

describe('Transaction Actions Tests', () => {
  const initialAmount = 10000;

  const wallet1 = {
    id: 1, name: 'Carteira 1', type: 'BRT', amount: initialAmount,
  };

  const wallet2 = {
    id: 2, name: 'Carteira 2', type: 'BTC', amount: initialAmount,
  };

  it('Handle Get Prices', async () => {
    const { handleTransaction } = transactionsActions(store);
    const { createWallet } = walletsActions(store);
    // @ts-ignore
    await store.setState(await createWallet(store.getState(), wallet1));
    // @ts-ignore
    await store.setState(await createWallet(store.getState(), wallet2));

    // simulate transaction
    // @ts-ignore
    await store.setState(handleTransaction(store.getState(), 1, 2, 1));

    // @ts-ignore
    const wallet1State : Wallet = await store.getState()
                                  .WALLETS.data.find(w => w.id === wallet1.id);

    expect(await store.getState().TRANSACTIONS.data).toHaveLength(1);
    expect(wallet1State.amount).toBe(initialAmount - 1);
  });
});
