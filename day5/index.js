// <--function to cacl students percentage from their marks-->
function calc(marks){
    var sumOfMarks = marks[0] + marks[1] + marks[2] + marks[3] + marks[4] + marks[5];
    var totalMarks = marks.length * 100;
    //gradeaggregate
    var gradeAgg = (sumOfMarks / totalMarks) * 100;
        console.log(gradeAgg);
     }

var samad = [99,90,85,80,95,92];
var faisal =[90,85,89,91,94,80];

calc(samad);
calc(faisal);


// <--Conditional statements-->

var faisal=1;
if(faisal) console.log("true");
else console.log("false");


var samad = false;
if (samad==true)
     console.log("passed");     
else
     console.log("Failed");     



// <--calculating agg rank using else if ladder-->

function grade(){

    var agg=92;

    if (agg>90){
            console.log("Distinction");
        }
    else if (agg >= 81 && agg <= 90){
            console.log("First class");
        }
    else if (agg >= 70 && agg <= 80){
            console.log("Second class");
        }
    else if(agg >= 61 && agg <= 70){
            console.log("waste fellow");
        }
    else if(agg > 35){
            console.log("Border pass");
        }
    else{
            console.log("Failed");
        }
}

grade();

// <--switch case agg stmt-->

var day = "Monday";
switch(day){
  case "Monday":
        console.log("It's the start of the week.");
        break;
  
    case "Tuesday":
        console.log("It's the second day of the week.");
        break;
  
    case "Wednesday":
        console.log("It's the middle of the week.");
        break;
  
    case "Thursday":
        console.log("It's almost the end of the week.");
        break;
  
    case "Friday":
        console.log("It's the end of the workweek. TGIF!");
        break;
  
    default:
        console.log("It's the weekend!");      
}


var agg = 92;
switch(true){
    case agg >= 70:
        console.log("First class");
        break;

    case agg >= 60:
        console.log("second class");
        break;
    
    case agg >= 50:
        console.log("Third class");
        break;
    
    case agg >= 35:
        console.log("Passed");
        break;
    
    default:
         console.log("Failed");     
}


// <--ELECTRICITY BILL CALCULATOR-->
// electricity 
// slabs
/*
    0-50: 2
    51-100: 3
    >100: 5
*/

function calcBill(units){
    var amount = 0;

    if (units > 100){
        var higherSlabUnits = units - 100;
        var value = higherSlabUnits * 5;
        amount = amount + value;

        units = units - higherSlabUnits;
    }

    if (units > 51){
        var middleSlabUnits = units - 50;
        var value = middleSlabUnits * 3;
        amount += value
        
        units = units - middleSlabUnits;
    }

    if(units > 0 ){
        var lowSlabUnits = units - 0;
        var value = lowSlabUnits * 2;
        amount += value;

    }

    var tax = amount * 0.05;
    return amount + tax;
}

console.log(calcBill(250));










