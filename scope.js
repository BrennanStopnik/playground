/*
// GLOBAL VARIABLE
"a" is a global variable.
A global variable is a variable that is declared outside any loop/if statement/ function.
Therefore, we can access the value of "a" from anywhere in our code.
You can call AND/OR modify a global varuable anywhere in the code
*/

//Global Variable
let a = 5;
console.log(a);

function addTenToA(){
    a += 10;
}

addTenToA();
console.log(a);


// LOCAL VARIABLE
/*
"b" is a local variable
A local variable can only be used inside of the scope that it is definied in because we declare our variable "b" inside our function addTenToB(), we can only ever use this variable inside this function.
You can only use your local variable when you access your function and console.log that.
*/

//Local Variable
function addTenToB(){
    let b = 7;
    b += 10
}

addTenToB();
console.log.apply(b)


let str = "keys";

function printStr(){
    let str = "house";
    console.log(str);
}
printStr();


let num1 = 10;

function testNums(){
    let num2 = 5;
    num1 = num2;  // This changes the number after you run the function. VV
}

testNums(); // This changed the variable to make it 5. If this didn't run then we'd still be getting the global variable.

console.log(`Num1 is equal to: ${num1}`);