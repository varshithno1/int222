const lodash = require('lodash');
const { add } = require('./add');

const nums = [1, 2, 3, 4, 5];
const dbnums = lodash.map(nums, n => n * 2);
console.log('Original Numbers: ', nums);
console.log('Doubled Number: ', dbnums);
console.log(add(2, 3));

module.exports = {
    add
}