/* filter() - This method filters an array with values that satisfies given condition,
then creates a new array with that satisfied elements */

var arr = [1,2,3,4];

var res = arr.filter(a => a % 2 === 0);     //Even nos

console.log(arr);
console.log(res);