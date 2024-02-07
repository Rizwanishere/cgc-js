// Objects: real world entity
// Properties & operations
// Encapsulation
// Object literals
// Dictionary

var student = {
    name: "Rizwan",
    rollno: 78,
    branch: "CSE",
    marks: [92, 90, 93, 94, 96],
    attendance: 58,
    salary: 2000,
    age: 20,
    print: function(){
        console.log(this.name, this.rollno, this.salary);
    },
    address: {
        city: 'Hyd',
        state: 'TS',
        country: 'IN',
        hNo: '1-123',
    },
};

student.salary=3000;
console.log(student.branch);
student.print();
console.log(student.address);
console.log(student.marks);
console.log(Array.isArray(student.marks));
// for in 
// array: reflection(iterating through elements of a loop)
// bracket notation []
for(var key in student){
    console.log(key,student[key]);  
}

var p = "attendance"
console.log(student[p]);



// two types
// value type and reference types

var x = 10;
var y = x; // copy
++x;
console.log(x, y);



function fn(a) {
    ++a;
    console.log("value of parameter 'a' is:", a);
}
// value type
var x = 10;
fn(x);
console.log("x is ", x);



function fn1(obj1) {
    obj1.width = 100;
}

function fn2(obj2) {
    obj2.width = 80;
}

var m1 = {
    width: 5,
    height: 10,
    color: 'Black'
};

fn1(m1);
console.log(m1);



var m1 = {
    width: 5,
    height: 10,
    color: 'Red'
};
// copy
// cloning
// instance
var m2 = {
    width: m1.width,
    height: m1.height,
    color: m1.color
};

console.log(m1 === m2); //false


