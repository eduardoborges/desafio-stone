/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from 'store';
import { sleep } from 'store/tools';
import actions from './actions';

configure({ adapter: new Adapter() });


describe('Auth Actions Tests', () => {
  it('Handle Login', async () => {
    const state = store.getState();
    const { handleLogin } = actions(store);
    // @ts-ignore
    await store.action(handleLogin(state));
    await sleep(2000);
    expect(store.getState().AUTH.isAuth).toBe(true);
  });

  it('Handle Logout', async () => {
    await store.setState({ AUTH: { isAuth: true, isLoading: false } }); // define como autenticado
    const { handleLogout } = actions(store);
    const resp = await handleLogout();
    await store.setState(resp);
    expect(store.getState().AUTH.isAuth).toBe(false);
  });
});
