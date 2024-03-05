//object constructor function
function Mobile(color) {
    this.width = 5;
    this.height = 7;
    this.color = color;

    this.print = function () {
        console.log("printing "+this.color+" mobile","width is: " + this.width,"Height is: "+this.height);
    }
}

var m1 = new Mobile("Red");
var m2 = new Mobile("Black");
var m3 = new Mobile("Yellow");
console.log(m1);
// console.log(m2);
// console.log(m3);
console.log(m1.width);
console.log(m1.height);
console.log(m1.color);
m1.print()