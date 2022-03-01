//initializing lodash
const _ = require("lodash");
//using lodash to flaten an array of arrays
const items = [1, [23, [45, 67, [3]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);
