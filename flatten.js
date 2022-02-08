export const flatten = (array) => array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);

const data = [1, 2, [3, 4, [5]]];
console.log(flatten(data));