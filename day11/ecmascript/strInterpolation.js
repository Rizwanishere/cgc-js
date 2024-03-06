// string interpolation

/* String Interpolation - embedding variables/expressions inside a string
We use `` quotes to implement string interpolation */

var name = "John";
var dept = "IT";
var salary = 2000;

// var op = name + " is working for " + dept +
//     "and his " +
//     "salary is " + salary;


// using backticks ` `

var op = `${name} is working for ${dept} 
and his 
salary is ${salary}`;

console.log(op);