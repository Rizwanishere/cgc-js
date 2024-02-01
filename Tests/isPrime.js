// 7) Given a number return if it is a prime eg:input 3 op true
function isPrime(number){
    if (number==1) return false;
    var upper=parseInt(Math.sqrt(number));
    for(var i=2;i<=upper;i++){
        if(number%i==0) return false;
    }
    return true;
}
console.log(isPrime(21));
