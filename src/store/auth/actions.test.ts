import store from 'store';
import { sleep } from 'store/tools';
import actions from './actions';


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

  it('Handle Check Login', async () => {
    const { handleCheckLogin } = actions(store);
    const state = store.getState();

    await store.setState({ AUTH: { isAuth: false, isLoading: false } }); // nao autenticado

    // @ts-ignore
    await store.action(handleCheckLogin(state));
    await sleep(2000);
    expect(store.getState().AUTH.isAuth).toBeTruthy();

    await store.setState({ AUTH: { isAuth: true, isLoading: false } }); //  autenticado

    // @ts-ignore
    await store.action(handleCheckLogin(state));
    await sleep(2000);
    expect(store.getState().AUTH.isAuth).toBeTruthy();
  });
});
