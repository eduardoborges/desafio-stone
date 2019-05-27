


/**
 * 
 * 
 */
export function combineActions(...fns) {
  return (...args) => Object.assign(...fns.map(fn => fn(...args)));
};


// 

export function uniq(){
  return Number(`${Date.now()}${(Math.random(1,1000)*100).toFixed(0)}`);
}