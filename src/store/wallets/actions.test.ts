/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from 'store';
import { Wallet } from 'store/wallets/types';
import actions from './actions';

configure({ adapter: new Adapter() });


describe('Wallets Actions Tests', () => {
  const initialAmount = 10000;

  const wallet1 = {
    id: 1, name: 'Carteira 1', type: 'BRT', amount: initialAmount,
  };

  const wallet2 = {
    id: 2, name: 'Carteira 2', type: 'BTC', amount: initialAmount,
  };

  it('Create New Wallet', async () => {
    const { createWallet } = actions(store);

    store.setState(createWallet(store.getState(), wallet1));
    store.setState(createWallet(store.getState(), wallet2));

    expect(store.getState().WALLETS.data).toHaveLength(2);
  });


  it('Remove Wallet', () => {
    const { createWallet, removeWallet } = actions(store);

    store.setState(createWallet(store.getState(), wallet1));
    store.setState(createWallet(store.getState(), wallet2));

    expect(store.getState().WALLETS.data).toHaveLength(2);


    store.setState(removeWallet(store.getState(), wallet1));
    store.setState(removeWallet(store.getState(), wallet2));


    expect(store.getState().WALLETS.data).toHaveLength(0);
  });
});
