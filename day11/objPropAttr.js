/* Property Attributes - property attributes refers the to metadata associated 
with object properties that define various characteristics of those properties,
such as enumerability, writability, and configurability. */


var mobile=Object.create({},{
    brand: {
        value:"samsung",
        writable:true,
        // configurable:true,
    }
});

Object.defineProperty(mobile,'brand',{value:"apple"})      //updating value only possible when either writable or configurable is set to true
console.log(mobile.brand);



var tshirt=Object.create({},{
    brand:{
        value: "Max",
        writable:true,
    }
})

/* 1. Writable: false ensures that attempting to change the value of m1.width
will have no effect. Defaults to false */ 

tshirt.brand = "Splash"        //splash is returned only when writable is set to true
console.log(tshirt.brand);

/* 2. With configurable: false we cannot perform any operations with the object
& when config is set to false we cant even update writable & enumerable.
Defaults to false */

delete tshirt.brand            //does not get deleted bcoz configurable is false.
console.log(tshirt.brand);



/* 3. Enumerable: true means it will be included in for in loop's iteration. 
basically enumerable: false makes that property invisible. Defaults to false.*/

var tshirt=Object.create({},{
    brand:{
        value: "Max",
        writable:true,
        enumerable:true,
    },
    price:{
        originalPrice: 1000,
        salePrice: 500,
    },
    material:{
        cotton: "90%",
        spandex: "10%",
        enumerable:true
    }
});

for (key in tshirt){
    console.log(key);                 //OP: brand & material.
}


// One more Enumerable example
var m1 = Object.create({}, {
    width: { value: 5, enumerable: true },
    height: { value: 10, enumerable: true ,configurable:true},
});

Object.defineProperty(m1, 'height', {
    enumerable: false
});

console.log(m1);          //height does not get printed as its enumerable is set to false


/* -------------------------------------------------------------------------------------- */

var m1 = Object.create({}, {
    width: {
        value: 5,
        enumerable: true
    },
    pi: {
        value: 3.14,
        writable: true,
        configurable: true
    },
    height: {
        value: 10,
        enumerable: true
    }
});

Object.defineProperty(m1, 'pi', {
    writable:false
    // writable & enumerable cant be redefined unless configurable is set to true.
});

m1.pi = 100;                //does not update as writable is set to false
console.log(m1.pi);         //OP: 3.14

m1.width = 15
console.log(m1.width);      //does not update to 15 as writable is false.

for (var key in m1) {
    console.log(key); //properties with only enumerable:true will be printed.
}
