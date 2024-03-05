



// var emp1 = { name: 'Abc', salary: 4000, dept: 'HR' };
// var emp2 = { name: 'Xyz', salary: 3000, dept: 'IT' };

// // list of objects
// // db -> memory list of students
// const employees = [emp1, emp2];

// console.log(employees[0]['salary']);
// console.log(emp1.salary);


// ---PHONEBOOK---
// var p1 = {
//     firstName: 'Rizwan',
//     lastName: 'ali',
//     mobile: [
//         { number: '+91-2828283839', type: 'Personal', primary: true },
//         { number: '+91-2828283832', type: 'Home', primary: false },
//         { number: '+91-2828283832', type: 'Office', primary: false },
//     ],
//     email: ['abc@gmail.com', 'abc@work.com'],
//     address: {
//         hNo: '1-123',
//         city: 'Hyderabad',
//         country: 'IN',
//         state: 'TS',
//         zip: '503199',
//     }
// };
// var p2 = {
//     firstName: 'Sohaib',
//     lastName: 'Samad',
//     mobile: [
//         { number: '+91-9902424329', type: 'Personal', primary: true },
//         { number: '+91-4748283832', type: 'Home', primary: false },
//         { number: '+91-2829842832', type: 'Office', primary: false },
//     ],
//     email: ['abc@gmail.com', 'abc@work.com'],
//     address: {
//         hNo: '1-123',
//         city: 'Hyderabad',
//         country: 'IN',
//         state: 'TS',
//         zip: '503199',
//     }
// };

// var phoneBook = [p1,p2];

// function search(str) {
//     var res = [];
//     for (var i = 0; i < phoneBook.length; i++) {
//         var obj = phoneBook[i];
//         if (obj.firstName.indexOf(str) > -1 || obj.lastName.indexOf(str) > -1) {
//             res.push(obj);
//         }
//     }
//     return res;
// }
// console.log(search("Riz"));


// ---ECMASCRIPT---


// function fn() {
//     if (true) {
//         const arr = [10, 20, 30];
//         arr.push(40);
//         arr.pop();                         //Operations can be performed on const arr

//         // arr = [1, 2, 3, 4];             //gives error as assigning to constant variable
//         console.log(arr);
//     }

// }

// fn()



// // string interpolation
// var name = "John";
// var dept = "IT";
// var salary = 2000;

// // var op = name + " is working for " + dept +
// //     "and his " +
// //     "salary is " + salary;


// // backticks
// // multiine strings

// var op = `${name} is working 
// for ${dept} and 
// his ${salary} is salary`;

// console.log(op);


// const m1 = {
//     width: 5,
//     height: 7,
//     color: 'Black'
// };

// // prop destructering
// // var width = m1.width;
// // var height = m1.height;
// // var color = m1.color;

// var { width, height, color} = m1;

// console.log(width, height, color);

// // array destructering
// const arr = [1, 2, 3, 4];
// const [first, second] = arr;
// console.log(first, second);



// // property shorthand
// var width = 5;
// var height = 10;

// // trailing comma
// var m1 = {
//     width,
//     height,
//     color: 'black',
// };

// console.log(m1);



// // rest/spread operator ...
// var m1 = {
//     width: 5,
//     height: 7,
//     color: 'Black',
//     features: {
//         camera: true,
//         frontCamera: true
//     }
// };

// var m2 = { ...m1, color: 'Red', width: 10 };   //...m1 means clone of m1

// var m3 = { ...m2, color: 'Green' };
// // m2.color = "Red";

// console.log(m1=== m2);    //false
// console.log(m1.features === m2.features);   //true


// var arr = [1, 2, 3, 4];
// var arr2 = [5, 6, 7, 8];

// var arr3 = [...arr, ...arr2];
// console.log(arr3);



// function fn(a, b, c) {
//     console.log(a, b, c);
// }

// const parameters = [10, 20, 30, 40];

// fn(...parameters);



// function declaration, expression
// now arrow function

// function add(a, b) {
//     console.log(a + b);
// }

// const add = function (a, b) {
//     return a + b;
// }
// anonymous function
// const add = (a,b) => a+b;
// console.log(add(10,5));

// const f = a => a+10;
// console.log(f(20));

// const f2 = () => console.log("Arrow Function");
// f2()


// var arr = [1, 2, 3, 4]; // 2,4,6,8
// // transformation
// var res = [];
// for (var i = 0; i < arr.length; i++) {
//     res.push(arr[i] * 2);
// }
// console.log(res);



/* map,filter & reduce are array built in methods that does not modify original array 
instead, it returns a new array containing only the elements that pass the specified test.*/

// MAP: Transforms each element of array
var arr = [1, 2, 3, 4];
// function double(num){
//     return num * 2;
// }

// var res = arr.map(function double(num){
//     return num*2;
// } );

// var res = arr.map(num=>num*2);
// console.log(res);



// FILTER:used for creating a new array containing elements that satisfy a given condition
// var res = arr.filter(function evenArr(num){
//     return num%2===0;
// })   

// var res=arr.filter(num=>num%2==0)
// console.log(res);



// var res = arr.reduce(function sumArr(acc,curr){
//     return acc+curr;
// })

// var res = arr.reduce((acc,curr)=>acc+curr)
// console.log(res);
