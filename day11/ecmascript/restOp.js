//  rest / spread operator - It is used to clone an object (Shallow cloning)
// Done by {...objName}

var m1 = {
    width: 5,
    height: 7,
    color: 'Black',
    features: {
        camera: true,
        frontCamera: true
    }
};

var m2 = { ...m1, color: 'Red', width: 10 };

console.log(m1.features === m2.features);       //true



var arr = [1, 2, 3, 4];
var arr2 = [5, 6, 7, 8];

var arr3 = [...arr, ...arr2];
console.log(arr3);