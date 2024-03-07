// What if the i/p in call back function is incorrect
// In callback(err,res); The first param should define error, and the second parameter gives o/p or result

function addAsync(a,b,cb) {
    
    setTimeout(function(){
        if(a === 0 || b === 0) console.log('Invalid Input');
        else{
            var res = a + b;
            // cb(res);
            cb(null,res);

            console.log('Calculation Completed');
        }
    },2000);
}

// rather than creating a callback function, we can define it in the paramter itself by arrow function

// addAsync(1,2,(res)=>console.log(res));

addAsync(1,2,(err,res) => {
    if(err) console.log(err);
    else console.log(res);
});
