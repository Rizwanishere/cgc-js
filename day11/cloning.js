var emp1 = {
    name: 'John',
    dept: 'HR',
    salary: 3000,
    isActive: true,
    address: {
        city: 'Hyderabad',
        state: 'TS'
    }
};

var emp2 = {};

// ---SHALLOW CLONING--- //

for (var key in emp1) {
    emp2[key] = emp1[key];
}

console.log(emp1.address === emp2.address);         //true
// /*
// This creates a shallow copy because primitive values 
// (like strings, numbers, booleans) are directly copied, 
// and for objects (like the nested "address" object), 
// the reference to the same object in memory is copied, not a new object.
// */



// ---DEEP CLONING--- //
// means cloning everything including nested objects

for (var key in emp1) {
    if (typeof emp1[key] === 'object') {
        emp2[key] = {};
        for (var innerKey in emp1[key]) {
            emp2[key][innerKey] = emp1[key][innerKey];
        }
    } else{ 
        emp2[key] = emp1[key];
      }
} 

console.log(emp2);
console.log(emp1.address === emp2.address);         //false      

// /* -------------------------------------------------------------------------------------- */


var emp1 = {
    name: 'John',
    dept: 'HR',
    salary: 3000,
    isActive: true,
    address: {
        city: 'Hyderabad',
        state: 'TS',
        home: {
            hno: '1-123'
        }
    }
};

function clone(obj){
    var res = {};
    for(var key in obj){
        if(typeof obj[key] === 'object'){
        res[key] = clone(obj[key]);
        }
        else{
            res[key]=obj[key];
        }    
    }
    return res;
    
}

var emp2 = clone(emp1)
console.log(emp1.address===emp2.address); //false



