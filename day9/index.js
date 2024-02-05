// Exception Handling

var fn;
fn(); //error: fn is not a function bcoz function is declared as expression after this(below) hence fn() cant be declared before it

fn = function(){
    console.log("Hello from fn");
}
fn(); // works fine as declared after function



try {
    var fn;

    fn();
    
    fn = function(){
        console.log("Hello from fn");
    } 
} 
catch(err) {
    console.log(err.message);
} 
finally {
    console.log("Cleanup done");
}




var a= 10;
var b=0;
var answer=a/b;
// raising an exception
// if(b<=0) throw new Error("invalid input");
console.log(answer);



function add(a,b) {
    if(a<=0 || b<=0) {
        throw new Error("gimme value greater than 0")
    }
    else {
        return a+b;
    }
}

try{
    console.log(add(10,-20));
} catch(err){
    console.log(err.message);
}



function addAge(age) {
    if (age < 0) throw new Error('Invalid age');
    return age + 1;
}

console.log(addAge(-10)); //op: Invalid Age // return stmt doesnt gets executed



// Loosely Typed: Doesnt have to specify what type of datatype stored in variable
// Dynamically Typed: Data types of variables are determined by the value they hold at runtime
// strongly typed(java)

function add(a,b) {
    // if(typeof f1==="function") f1=f1();
    // if(typeof f2==="function") f2=f2();
    var c = a + b; 
    console.log(c); 
}

add(10, 20);
add('abc', 234);
add(true, false);
add(10.20, 20.20);
add(undefined, undefined);
add([1, 2, 3], [ 4, 5, 6]);

function f1() { 
    return 100; 
}
function f2() { 
    return 200; 
}

add(f1,f2);
add(f1(), f2());


// <---Function for adding array which is inside another array--->
function addArr(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) sum+=addArr(arr[i])
        else  sum += arr[i];
       
    }

    return sum;
}

function add(a, b) {
    if (Array.isArray(a)) a = addArr(a);
    if (Array.isArray(b)) b = addArr(b);

    if (typeof a === 'function') a = a();
    if (typeof b === 'function') b = b();

    console.log(a + b);
}

add([1, 2, 3], [4, 5, 6]);
add([1, 2, [1, 2, 3, [1, 2, 3, [4, 5, 6]]]], [4, 5, 6]);
