// 6)Return total number of factors of a number ex: x = 4 output: 3 (factors: 1,2,4
function factorOfNumber(number){
    var sumOfFactor=0;
    var factors=[]
    for(var i=1;i<=number;i++){
        if(number%i==0){
            sumOfFactor=sumOfFactor+1;
            // factors.push(i);
            factors = factors + i +" "
        }
    }
    console.log(factors);
    return sumOfFactor;
}
console.log(factorOfNumber(17));
