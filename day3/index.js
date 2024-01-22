// data types (number, string, boolean, undefined, function ,object)
//STRINGS index starts from zero
var str="This is a string"

var str2=" second string"
var str3= str + str2        //CONCATENATION
console.log(str3);

var ans = str.substring(5,2)  //(index,count)

var ans = str.indexOf("is")   //Shows 1st index of first occurance of first character(i)

var ans = str.lastIndexOf("is")  //checks from last

var time = "12:29:30"
var ans = time.split(":")

console.log(ans);

//TYPE CONVERSIONS

var x= "10"
var intOfX = parseFloat(x)    // string to number
console.log(intOfX)

var y=20
var strOfY = y.toString()
console.log(strOfY)  // number to string

//Truthy and Falsy
//All values are truthy except 0, "", NaN, undefined, null, false
var str = 0
var ans= !!str
console.log(ans)
