/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */

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

export { combineActions };
