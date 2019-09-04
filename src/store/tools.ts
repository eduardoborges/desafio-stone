/* eslint-disable */

// @ts-ignore
const combineActions = (...actions: any[]) => (store) => {
  const all = {};
  // @ts-ignore
  for (let i = 0; i < actions.length; i++) {
    const obj = actions[i](store);
    // @ts-ignore
    for (const p in obj) all[p] = obj[p];
  }
  return all;
};

function bindActions(store: any, actions: any) {
  if (typeof actions === 'function') actions = actions(store);
  const bound = {};
  // @ts-ignore
  for (const i in actions) bound[i] = store.action(actions[i]);
  return bound;
}

const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));

export { combineActions, bindActions, sleep };
