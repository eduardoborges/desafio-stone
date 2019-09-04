/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from 'store';
import { sleep } from 'store/tools';
import actions from './actions';

configure({ adapter: new Adapter() });


describe('Auth Actions Tests', () => {
  const {
    handleLogin, handleCheckLogin, handleLogout, handleRefreshToken,
  } = actions(store);

  it('Handle Login', async () => {
    const state = store.getState();
    await store.action(handleLogin(state));
    await sleep(2000);
    expect(store.getState().AUTH.isAuth).toBe(true);
  });
});
