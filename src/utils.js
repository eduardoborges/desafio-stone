


/**
 * 
 * 
 */
export function combineActions(...fns) {
  return (...args) => Object.assign(...fns.map(fn => fn(...args)));
};
