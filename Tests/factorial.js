// 8)Given a number return its factorial
function fact(n){
    if(n==1) return 1; 
    return n * fact(n-1);    
    
}
console.log(fact(2));