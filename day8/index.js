// <--Recursion--> A function calls itself infinitely or till edge case(if declared).

function recN(n){
    if (n==1) return 1;
    return n * recN(n-1);

}
console.log(recN(5));


function fact(n){
    if(n==1) return 1;
    return n * fact(n-1);
}
console.log(fact(5));

// Q) given a array return smallest value


// ITERATIVE METTHOD
function findMin(arr){
    var minSoFar = arr[0]
    
    for(var i=0;i<arr.length;i++){
        if(arr[i]<minSoFar){
            minSoFar=arr[i];
        }
    }
    return minSoFar
}
console.log(findMin([12,45,-6,3,-2,-1]));


// RECURSIVE METHOD
var minSoFar = Infinity;
var i=0;

function findMinRecN2N(arr){
   
    if(i==arr.length) return; 
    if(arr[i]<minSoFar) {
        minSoFar=arr[i];
    }
    i++;
    findMinRecN2N(arr);
}

findMinRecN2N([12,45,-6,3,-2,-1]);
console.log(minSoFar);


function findMinRecN2(arr, i, minSoFar) {
    if(i==arr.length) return minSoFar;
    if(arr[i]<minSoFar){
        minSoFar=arr[i];
    }
    return findMinRecN2(arr, i + 1, minSoFar);
}

console.log(findMinRecN2([12,45,-6,3,-2,-1],0,Infinity));



