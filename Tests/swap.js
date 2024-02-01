// 3)Write a function to swap two numbers: ex: a= 10, b = 20; Output: a=2
function swap(a,b){
    var temp=a;
    a=b;
    b=temp;
    return [a,b];
}
console.log(swap(10,20));
