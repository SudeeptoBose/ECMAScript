let first_name = "Sudeepto";
let last_name = "Bose";
let num1 = 1;
let num2 = 2;

// Before 
// const full_name = first_name + " " +last_name;
// After
const full_name = `${first_name} ${last_name}`;

console.log(full_name);

// Allows you to perform operations within the curly braces
const add = `${num1+num2}`;
console.log(add);

// Multiline print before
let greet = "Hello \n" + "World!";

// Now - purpose is the option to create multiline strings in a convenient way
let newGreet = `Hello
${full_name}!
`;


