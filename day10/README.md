object has a configuration which contains four properties as value, writable, enumerable and configurable. <br>
Syntax: Object.defineProperty(obj, prop, descriptor)


<h2>Object Creation<h2>  
// Each of the following options will create a new empty object:<br>  
var newObject = {};<br>
// or<br>
var new Object = Object.create( Object.prototype );<br>
// or<br>
var newObject = new Object();  <br>
  
<h2>Set Property<h2>  <br>
var newObject = {a: 1};  <br>
// Accessing to a property <br> 
newObject.a; // => 1  <br>
// Modifying the value of a property  <br>
newObject.a = 0;  <br>
newObject.a; // => 0;  <br>
// Creating a new property  <br>
newObject.b = 2;  <br>
newObject.b; // => 2  <br>
// Deleting a property   <br> 
delete newObject.b;  <br>
newObject.b; // => undefined  <br>

  
but, you know that all the properties above are writable, configurable & enumerable, I mean : <br> 

<h2>writable:<h2> 
I can modify their values, I can update a property just assigning a new value to it.Defaults to true. (or)  The writable attribute determines whether the value of a property can be changed.
<h2>enumerable:<h2> 
I can access to all of them using a for..in loop. Also, enumerable property keys of an object are returned using Object.keys method. Defaults to true. (or)  The enumerable property attribute in JavaScript determines whether a property is included when iterating over an object
<h2>configurable:<h2> 
I can modify the behavior of the property, so I can make them non-enumerable, non-writable or even non-cofigurable if I feel like doing so. Configurable properties are the only ones that can be removed using the delete operator. Defaults to true.  (or)  The configurable attribute determines whether a property can be reconfigured or deleted from the object.

The main differences between the writable and configurable attributes for object properties in JavaScript are related to whether you can modify the property value and whether you can redefine or delete the property, respectively.
