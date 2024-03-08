function addAsync(a,b){
    /* Instead of creating a function and passing it as an argument to the promise, and then
    'return' that promise object by storing it into a variable */

    // We directly declare and return the promise
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
        if (a===0)
            reject("Invalid Input")
        else
            resolve(a+b) 
        },3000);
    });
}

function subAsync(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (a===0) reject("Invalid Input")
            else resolve(a-b)
        },2000);
    });
}

function mulAsync(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (a===0) reject("Invalid Input")
            else resolve(a*b)
        },1000);
    });
}
// Parallel Execution
addAsync(5,2).then((res)=>console.log('addn:',res))

subAsync(10,5)
    .then((subRes) => console.log('subN:',subRes))
    .catch((error) => console.log(error))

mulAsync(2,4).then((res)=>console.log('mulN:',res))


// Sequential Execution: This also gives callback hell...
addAsync(10,20)
    .then((addRes)=>{
        subAsync(addRes,10)
            .then((subRes)=>{
                mulAsync(subRes,10)
                    .then((mulRes)=>{
                        console.log(mulRes)
                    })
            })
    })

// To Resolve this callback hell issue
// Promise Chaninig
addAsync(10,20)
    .then((addRes)=>subAsync(addRes,10))
    .then((subRes)=>mulAsync(subRes,10))
    .then((mulRes)=>console.log(mulRes))
    .catch((err)=>console.log(err));


