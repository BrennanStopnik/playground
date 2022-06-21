/*
Objects vs Primitives
Primitive Data Types are: Numbers, Strings, Booleans
Objects/Non-Primitive Data Types are: Objects, Arrays
*/

let primitive1 = 3;
let primitive2 = primitive1;
primitive2 = 4;

console.log(primitive1);
console.log(primitive2);

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

console.log(object1);
console.log(object2);
console.log(object3);