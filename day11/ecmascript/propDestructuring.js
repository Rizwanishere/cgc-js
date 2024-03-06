// --Property Destructuring-- // 
/* It is used to extract values from the existing object properties into a seperate variable */

const m1 = {
    width: 5,
    height: 7,
    color: 'Black'
};


// var width = m1.width;
// var height = m1.height;
// var color = m1.color;

var { width, height} = m1;

console.log(width, height);



// --Array Destructering-- //

const arr = [1,2,3,4];

const [first,second] = arr;
const [one,two] = arr;
const [a,b] = arr;

console.log(first,second);
console.log(one,two);
console.log(a,b);
