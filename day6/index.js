// <--FOR LOOPS-->
// loops: for, while, do-while, for in, for of
//init  1
//condn n 
//incremnt/decrmt n
//body n
//i: invariant
for(var i=0;i<=100;i++){
    console.log(i);
}

for(var i=100;i>=0;i--){
    console.log(i);
}

for(var i=100;i>=1;i=parseInt(i/2)){
    console.log(i);
}

//you can skip any part of the ( , , ) but this will make loop infinite
// infinite loop
//break: terminates
for (var i = 1; ; i++) {
    console.log("hello");

   if(i==10){
    break;
   }
}

//continue: skips
for(var i=0;i<=10;i++){
    
    if(i==5){
        continue;
    }
    console.log(i);
}

//Nested Loops
for(var i=0;i<=100;i++){
    for (var j=0;j<=100;j++){
        console.log(i,j);
        if(j===10) break;
    }
}

//multiplication table
//1*1=1
//1*2=2
for(var i=1;i<=10;i++){
    for(var j=1;j<=10;j++){
        var total = i*j;
        console.log(i , "*" , j , "=" , total);
    }
    console.log();
} 

//even nos & for odd put ! in if condtn
for(var i=1;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}

//making above loop in function
function isEven(){
    for(var i=1;i<=100;i++){
        if(i%2==0){
            console.log(i);
        }
    }
}
isEven();

//<--WHILE LOOP-->
var i=1;
while(i<=99){
    console.log(i);
    i++;
}


