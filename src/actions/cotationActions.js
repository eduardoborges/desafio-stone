/**
 *
 *
 */

const actions = store => ({
  /**
   * Efetua uma consulta de cotacao
   * @param {*} state A app state
   */
  foo(state) {
    return { cotation: { usd: true } };
  }
});

export default actions;
