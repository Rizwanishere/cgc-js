// map() - This method creates a new array by performing some operation on each element on the array.

// var arr = [1, 2, 3, 4]; 

/*transform above array to double of its values // 2,4,6,8
var res = [];       //conventional method(Lengthy)
for (var i = 0; i < arr.length; i++) {
    res.push(arr[i] * 2);
}
console.log(arr, res); */


var arr = [1,2,3,4];

let res = arr.map(a => a * 2);
console.log(res);

