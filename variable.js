// let is assigned to block scope. Cannot be re-declared
// But can be reassigned a value

let Intern = "Sudeepto";
console.log(Intern);

// Uncomment bottom two line to view the errors for redeclaring
// let Intern = "New Intern"
// console.log(Intern)

// Reassigning a value

Intern = "New Intern";
console.log(Intern);

// const is assigned to block scope and cannot be re-declared
// A constant cannot be reassigned a value

const name = "Sudeepto Bose";

// Uncomment bottom two lines to view errors 
// const name = "Bob"
// name = "Bob"

// var can be re-declared and reassigned

var greet = "Hello!";
console.log(greet);
greet = "Guten Tag";
console.log(greet);
var greet = "Hallo!";
console.log(greet);