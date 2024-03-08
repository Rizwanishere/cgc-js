/* Async and await - It allows you to write asynchronous code in a linear fashion, avoiding 
callback hell and nested Promise chains.*/

/*The async keyword is used to define an asynchronous function, which returns a Promise. 

Inside an asynchronous function, the await keyword is used to pause the execution of the 
function until a Promise is resolved, allowing you to write sequential asynchronous code 
as if it were synchronous.*/

function addAsync(a,b){
    return new Promise((resolve,reject)=>{
        if (a===0) reject('Invalid Input');
        else resolve(a+b);
    });
}

function subAsync(a,b){
    return new Promise((resolve,reject)=>{
        if (a===0) reject('Invalid Input');
        else resolve(a-b);
    });
}

function mulAsync(a,b){
    return new Promise((resolve,reject)=>{
        if (a===0) reject('Invalid Input');
        else resolve(a*b);
    });
}

// addAsync(1,3).then((res)=>console.log(res));

async function init(){
    try{
        const addRes = await addAsync(4,3);
        const subRes = await subAsync(addRes,4);
        const mulRes = await mulAsync(subRes,5);
        console.log(mulRes);
    } catch(err){
        console.log(err);
    }
}

init();