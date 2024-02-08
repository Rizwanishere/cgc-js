object has a configuration which contains four properties as value, writable, enumerable and configurable.

<h2>Object Creation<h2>  
// Each of the following options will create a new empty object:  
var newObject = {};  
// or  
var new Object = Object.create( Object.prototype );  
// or  
var newObject = new Object();  
  
<h2>Set Property<h2>  
var newObject = {a: 1};  
// Accessing to a property  
newObject.a; // => 1  
// Modifying the value of a property  
newObject.a = 0;  
newObject.a; // => 0;  
// Creating a new property  
newObject.b = 2;  
newObject.b; // => 2  
// Deleting a property    
delete newObject.b;  
newObject.b; // => undefined  

  
but, you know that all the properties above are writable, configurable & enumerable, I mean :  

<h2>writable:<h2> 
I can modify their values, I can update a property just assigning a new value to it.Defaults to true.
<h2>enumerable:<h2> 
I can access to all of them using a for..in loop. Also, enumerable property keys of an object are returned using Object.keys method. Defaults to true.
<h2>configurable:<h2> 
I can modify the behavior of the property, so I can make them non-enumerable, non-writable or even non-cofigurable if I feel like doing so. Configurable properties are the only ones that can be removed using the delete operator. Defaults to true.
