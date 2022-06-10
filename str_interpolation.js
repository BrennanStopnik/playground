let firstName = "Juan";
let age = 28;

console.log("Hello, my name is " + firstName + ". I am " + age + " years old." );

//String interpolation
//optional alternate syntax
console.log(`Hello, my name is ${firstName}. I am ${age} years old.`);

let mod = 102;
let term = 1;

//String interpolation with calculations
console.log(`Welcome to module ${mod+100}! This is the second module in term ${term+1}.`);


function fullName(firstName, lastName){
    let fullName = firstName + " " + lastName;
    return fullName;
}

//String interpolation with a function call
console.log(`Hello, my name is ${fullName("Smith", "Henson")}. I am ${age} years old.`);