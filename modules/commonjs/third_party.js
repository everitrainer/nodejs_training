const _ = require('lodash');

const array = [1, 2, 3, 4, 5];
const reversedArray = _.reverse(array.slice());

console.log('Reversed Array:', reversedArray); // Reversed Array: [5, 4, 3, 2, 1]