//object inheritance

var samsung = {
    type: "Phone",
    print: function () {
        console.log('parent object');
    }
};

var s21 = Object.create(samsung, {
    width: { value: 10}
});

s21.print = function () {                         // method hiding, overriding 
    console.log('child object');
}

s21.print();                        //OP: child object
console.log(s21.type);              //OP: Phone