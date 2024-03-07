/*Asynchronous code allows multiple operations to be executed with out blocking the main thread.
Since, we know that JavaScript is single threaded*/

function addASync(a,b) {
    console.log('Execution Started...');
    // This function is used to schedule the the execution of a function after a specified delay
    setTimeout(function(){
        // As we can see there is delay of 2sec in this function.
        // while the delay the main thread keeps on its execution rather than waiting for the time to end
        console.log('Calculation Started...');
        ++a;
        ++b;
        console.log(a);
        console.log(b);

        var c = a + b;
        // when the delay occurs it'll not return the return value rather skip it 
        return c;
        console.log('Calculation ended.');
    },2000);
    console.log('Execution ended.');
}

var res = addASync(5,3); 
console.log(res);  // In the output it is giving 'undefined'
// In OP 'Execution ended.' && c value is not getting printed due to non usage of 'callbacks'

                    /* --CALLBACKS -- */
/* In Asynchronous code the value is not returned if it is delayed,
so inorder to retrieve the value we use callback function*/

/*callback function is passed as an argument in another function 
and it is called back at a later time,eg: when data fetching is done */

/* To Retrieve the return value 'c' of the timeout function we have to create a call back function */
function callback(result) {
    console.log(result);
}

// Using above callback in below function

function sumAsync(a, b, cb){
    setTimeout(function(){
        ++a;
        ++b;
        
        var c = a + b;

        if(typeof cb !== 'function') throw new Error('Invalid callback');
        cb(c); // we are passing the return value to the function to retrieve the value
    },2000);
}

sumAsync(2,3,callback);         //OP: 7


