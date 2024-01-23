// var a=10;
// var b=20;
// function addition(){
//     return a+b;
// }
// console.log(addition());

// <---FUNCTIONS--->
// by default funtns return type is undefined
function add(a,b){
    return a+b;
}
console.log(add(6,6));

// var ans = add(6,6);
// console.log(ans);


// <---NESTED FUNCTIONS--->

function outer(){
    console.log("Outer Function");

    function inner(){
        console.log("Inner Function");
    }
    inner();
}
outer();

// HOISTING: Funtn can be called from both top or bottom

console.log(addition(2,2)); //--- Top  
function addition(a,b){         
    return a+b;
}
console.log(addition(2,2)); //---bottom

//above were function declaration

//Function expression-->
var add = function(a,b){
    return a+b;
}
console.log(add(5,8));
console.log(typeof add);

// <--ARRAYS--> (OBJECT)

var phNumbers = [1,2,3,4,5,6,7];
console.log(typeof phNumbers);   //object
console.log(phNumbers);
console.log(typeof phNumbers[0],phNumbers[0]); //number 1
console.log(phNumbers.length); //7

//<--STACKS-->
// push & pop
var rollNos = [62,78,117,118];
rollNos.push(82); //adds 82 to last place
rollNos.pop();    //removes last element only
console.log(rollNos);

// <--QUEUES-->
// shift & unshift
rollNos.unshift(94); //adds 94 to first place
rollNos.shift();     //removes first element only
console.log(rollNos);

//SLICE & SPLICE
// slice & splice both returns subarray of original array only difference is splice modifies original array whiles slice does not
var rollNos = [62,78,117,118];
var ans = rollNos.slice(0,3);   //(start index, end index)
console.log(ans);
// console.log(ans,rollNos);

var res = rollNos.splice(2,2); //(start index, count)
console.log(res);

//searching
var lastNo = rollNos.lastIndexOf(78);
console.log(lastNo);

//2D array   
//Columns     0 1 2   
var arr2d = [[1,2,3],  // 0   Rows
             [4,5,6]]; // 1
console.log(arr2d[1][2]);   //6




