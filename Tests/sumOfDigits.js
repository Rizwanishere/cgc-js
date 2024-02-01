// 5)Return sum of digits of a number ex: x = 123 output: 6 (1+2+3 = 6
function sumOfDigits(number){
    var sum_digits=0;
    var num_str=number.toString();
    for(var i=0;i<num_str.length;i++){
        sum_digits=sum_digits + parseInt(num_str[i]);
    }
    return sum_digits;  
}
var x=400;
console.log(sumOfDigits(x));
