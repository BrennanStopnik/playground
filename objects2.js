/*
Objects vs Primitives
Primitive Data Types are: Numbers, Strings, Booleans
Objects/Non-Primitive Data Types are: Objects, Arrays
*/

let primitive1 = 3;
let primitive2 = primitive1;
primitive2 = 4;

// console.log(primitive1);
// console.log(primitive2);

/*
In this example, we set the reference of object 2  to equal the same reference as object 1. They both now reference the same location in memory meaning, if we change the value of one of them, it will change the value for both
*/

let object1 = {
    a: 3
}

let object2 = object1;
object2.a = 4;

let object3 = object2;
object3.a = 5;
object3.b = 10;

let object4 = {
    c: 20
}
object2 = object4;
object2.b = object1.b;

// console.log(object1);
// console.log(object2);
// console.log(object3);
// console.log(object4);


let arr1 = [3];
let arr2 = arr1;
arr2[0] = 4;

arr1.push(10);

// console.log(arr1);
// console.log(arr2);



let x = 5;

// Pass by Value
function setValue(num){
    num = 2 * num;
    return num;
}

setValue(x)
console.log(`x is equal to: ${x}`);

// Even though we call the function, we're not changing the value of x.

x = setValue(x)
console.log(`x is equal to: ${x}`);

// If we want x to take the value of what  it became inside the function, we have to set it equal to what the function returns:
    // x = setValue(x);


let user1 = {
    firstName: 'Bob',
    lastName: 'Paulson',
    isAdmin: false
}

// Pass by Reference
function promotion(user){
    user.isAdmin = true;
    return user;
}

promotion(user1);
console.log(`Admin status: ${user1.isAdmin}`)

// For pass by reference, whenever we modify the object inside the function, those changes persist for the object outside the function as well.
// This is because we are passing a reference to the memory location that our object is pointing to, so if we modify the properties at that location, any object pointing to that location will have their values changed.















