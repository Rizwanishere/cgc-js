/* What if we want to store any variable permanently, we use Serialization */

/* Serialization in JavaScript refers to the process of converting an object into a format that 
can be easily stored (such as JSON) or transmitted over a network (such as XML). */

/* This JSON or XML file can be sent to any other programming language, since it supports 
JSON or XML file. */

var student = {
    3: 'true',
    name: 'Rizwan',
    id: 160921712345,
    branch: 'CSE',
    grade: 9.8,
}

// Converting object to JSON file
// To identify JSON file, the key will be in double quotes

var serializedObject = JSON.stringify(student);
console.log(serializedObject);

// Converting JSON file to object

var deSerializedObject = JSON.parse(serializedObject);
console.log(deSerializedObject);


// //Output:
// {"3":"true","name":"Rizwan","id":160921712345,"branch":"CSE","grade":9.8} //JSON format

/* {    
  '3': 'true',
  name: 'Rizwan',
  id: 160921712345,     
  branch: 'CSE',
  grade: 9.8
}*/ //Object format