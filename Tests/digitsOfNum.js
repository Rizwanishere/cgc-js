// 4)Print all the digits of a number ex: x = 123 output 1 2 3
var num=251;
num = num.toString();
var result = "";
for(var i=0;i<num.length;i++){
    result = result + num[i] + " ";
}
console.log(result);
