// function addAsync(a,b,callback){
//     setTimeout(function(){
//         var res= a+b;
//         callback(res);
//     },2000);
// }
//Another way to write this type of code is

function addAsync(a,b,callback){
    setTimeout(()=>callback(a+b),3000);
}

function subAsync(a,b,callback){
    setTimeout(()=>callback(a-b),2000);
}

function mulAsync(a,b,callback){
    setTimeout(()=>callback(a*b),1000);
}

// parallel execution of Asynchronous functions
addAsync(2,4,(result)=>console.log("Addition: ",result));
subAsync(8,4,(result)=>console.log("Subtraction: ",result));
mulAsync(3,5,(result)=>console.log("Multiplication: ",result));
console.log();



// Sequential execution of Asynchrous functions

// This code snippet is known as callback hell, This code is even not efficient in readability

/* Callback hell refers to the situation in asynchronous programming where code becomes difficult
to read and maintain due to excessive nesting of callback functions.*/
// In cb Hell below code gets executed in order because subAsync is dependent of addAync.

addAsync(2,4,(addRes)=>{
    console.log('addN: ',addRes);
    subAsync(8,4,(subRes)=>{
        console.log('subN',subRes);
        mulAsync(3,5,(mulRes)=>{
            console.log('mulN',mulRes);
        });
    });
});