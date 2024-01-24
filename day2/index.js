// arithmetic operators(+,-,*,/,%)
var a=10
var b=20
var ans1= a%b
console.log(ans1)

// conditional op (either true or false(boolean))
// if 10 == '10' --> true (loose checking)
// if 10 === '10' -->false (tight checking)
var a=10
var b='10'
var ans2= a==b
console.log(ans2)

// logical op(&&,||,!)  (0 1)
// &&=true when both should be 1 otherwise false
// ||=true when either is 1 otherwise false when 0 0
// ! true=false & false=true

// bitwise operators(&) 
        //-->(4 2 1)
var a=6 //--> 1 1 0
var b=3 //--> 0 1 1
//      //--> --------
//      //--> 0 1 0
console.log(a&b) //(&= both are 1)

// bitwise operator(|)
var a=6 //--> 1 1 0
var b=3 //--> 0 1 1 
//      //--> --------
//      //--> 1 1 1
console.log(a|b) //(|= either is 1 )

// bitwise operator(^)
var a=6 //--> 1 1 0
var b=3 //--> 0 1 1 
//      //--> --------
//      //--> 1 0 1
console.log(a^b) //(^= 0 when both are 1)

// pre & post increment
// var a=10

// ++a --> 11
// a++ --> 11

var x = a++    // ++a=11 and a++=10 here var a always = 11
console.log(a,x)

// bitwise operator(<<)
var x = 50
console.log(x<<1);    //100

// bitwise operator(>>)
var x = 50
console.log(x>>1);    //25

// <--Ternary Operators-->

// if (marks >= 40) {
//     passed = true;
// } else {
//     passed = false;
// }

var marks = 92
var passed = marks >= 35? 1:0
console.log(passed);