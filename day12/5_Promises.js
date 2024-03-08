/* To resolve the problem of callback hell, We are using 'Promise' - It handles async operations
in a more organised and managed way, Improve Readability of the code. */

/* Promise is an object which is created by the new keyword 
syntax - const variable_name = new Promise(function_name) */

// There are 3 states of Promise - pending, resolved(success), rejected(error)

// Now in Asynchronous code instead of using 'callback' we use 'Promise'.


function addAsync(a,b){
    // We pass this function 'fn' as an argument in the promise 
    // then only we can declare parameters in the argument of the function 'fn'

    function fn(resolve,reject){
        setTimeout(()=>{
            if(a===0) 
                reject("Invalid Input");
            else 
                resolve(a+b);
        },3000);
    }
    const p = new Promise(fn);
    return p;
}

// console.log(typeof promise); // object
// 'then' is used to give the successful output
// 'catch' is used to give the error

var answer = addAsync(1,5);

answer.then(function(data){
    console.log(data);
})
    .catch(function(err){
    console.log(err);
    })

// Using Arrow function:
// ans.then((res)=>console.log(res))
// .catch((err)=>console.log(err))














