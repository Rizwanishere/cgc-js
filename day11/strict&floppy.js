/* strict and floppy
"stricter rules" catches common errors, and promotes better coding practices.
"sloppy mode" refers to the default mode where less strict rules are enforced */

'use strict';
var m1 = Object.create({}, {
    width: { value: 5,enumerable: true},
    height: { value: 10},
});


m1.width = 100;  //In floppy mode if writable is false then it Neither gives error Nor updates; But in strict mode it throws error

console.log(m1);



/* -------------------------------------------------------------------------------------- */


'use strict';

x = 10;                      //gives error bcoz no use of variable
console.log(x);

function add(a, a) {
    console.log(a + a);      //gives error as duplicate parameter name
}
add(10, 20);


/* -------------------------------------------------------------------------------------- */


// Migration - Converting of sloppy mode code to strict mode is known as migration

// Strict mode can also be used in a function specific area

/* We often use strict mode inside the particular blocks because, when there are
large program declaring the strict mode globally may effect the entire code 
and it may take time to make it perfect acc to strict mode 

so we use strict mode in block wise and make the code better accordingly */

newFn();            // calling the function before the declaration is K.A Hoisting
function newFn() {
    'use strict';
    var x = 10;
    console.log(x);
}

function add(a, b) {
    'use strict';
    console.log(a + b);
}
add(10, 20);