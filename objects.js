const prompt = require("prompt-sync")({sigint: true});

/*
An object is a structure that allows us to represent real life properties by using key-value pairs.
To access the value in the key-value pair is by using "Dot Notation" VV
    objectName.property ---> object.key = value
*/

// Individual variables
let studentName = "Jimmy Parsens";
let studentAge = 29;
let studentMajor = "Computer Science";


// Object is one variable that has many different pieces of information accessible by the "Key" or name of the value it's trying to get.
let student1 = {
    name: "Jimmy Parsens",
    age: 29,
    major: "Computer Science"
}

console.log(student1);
console.log(student1.name);

// How to change the value/property/attribute for the key
    // set that property equal to the new value
student1.age = student1.age +1;
console.log(`${student1.name} is now ${student1.age} years old.`)

student1.major = "Woodshop Teacher";
console.log(student1);

// How to add a property to the object
    // dot notation with new key equals new value



let student2 = {
    name: "Jackie Waters",
    age: 22,
    major: "Music"
}

let student3 = {
    name: "Bobert Parsens",
    age: 32,
    major: "Sociology"
}
student1.year = "Freshman";
student2.year = "Sophomore";
student3.year = "Senior";

student2.major = "Friendship facilitator"

console.log(`We have 3 students in this class: \n
${student1.name}
${student2.name}
${student3.name}`);

let classroom = [student1, student2, student3];
console.log(classroom);


let toDoList = [];

let item1 = {
    task: "Wash Dog",
    completed: false,

}
let item2 = {
    task: "Eat Food",
    completed: false,

}
let item3 = {
    task: "Take Shit",
    completed: true,

}

toDoList.push(item1);
toDoList.push(item2);
toDoList.push(item3);

console.log(toDoList);

for (let i = 0; i < toDoList.length; i++){
    let status = "";
    if (toDoList[i].completed === false){
        status = "[incomplete]";
    } else{
        status = "[complete]";
    }
    console.log(`${i+1}. ${status} ${toDoList[i].task}`)
}
// ^^ this is how you access the properties of the object inside the array
    // arrayName[index].property




let person = {
    name: "Peter Jobs",
    age: 35
}

// Dot notation
console.log(person.name);

// Bracket notation
console.log(person['name']);

let newProp = prompt("Enter a new property for this person object: ");

let newValue = prompt("Enter a new value for that property: ");

person.newProp = newValue;
    // For user inputs this logs like this = newProp: 'Product Manager'
        // Take the .property literally

person[newProp] = newValue;
    // For user inputs this logs like this = Position: 'Product Manager'
        // Takes the [property] and uses the info given
console.log(person);