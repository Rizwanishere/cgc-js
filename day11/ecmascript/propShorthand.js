/* Property Shorthand - When creating a new object it assign variable as the properties of 
the new object (which is being created) */

const name = 'Rizwan';
const age = 20;


const person = {
    name,
    age,
    color: 'Red',           //Trailing comma is allowed
}

console.log(person);