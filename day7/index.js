// Q) given a number return whether it's a prime
// input: number
// output: boolean
// prime: a number which has exactly 2 factors (1 & itself)
// n%i === 0

function isPrime(n){
    if(n==1) return false;      // edge case

    var upper = parseInt(Math.sqrt(n));     //squareRoot of input number n gives small value
    for(var i=2;i<=upper;i++){
        if(n%i==0) return false;
    }
    return true;
}
console.log(isPrime(1024));


var arr = [18,19,20,19,18];
var sum = 0;

for(var i=0;i<arr.length;i++){
    sum= sum + arr[i];
}
console.log("Samad's CIE marks are:",sum);


function calcGrade(agg){
    if(agg>90) return "Distinction";
    else if (agg>60 && agg<90) return "First Class";
    else if (agg>35 && agg<60) return "Second Class";
    else return "Failed";
}


function calcAgg(marks){
    var marksSecured = 0;
    var totalMarks = marks.length * 100;

    for(var i=0;i<marks.length;i++){
        marksSecured = marksSecured + marks[i];
    }
    var agg= (marksSecured/totalMarks) * 100;

    console.log(agg);
    return calcGrade(agg);
}

console.log(calcAgg([90,92,95,85,77,89]));





