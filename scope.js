/*
"a" is a global variable.
A global variable is a variable that is declared outside any loop/if statement/ function.
Therefore, we can access the value of "a" from anywhere in our code.
*/

//Global Variable
let a = 5;
console.log(a);

function addTenToA(){
    a += 10;
}

addTenToA();

console.log(a);

//Local Variable
function assTenToB(){
    let b = 7;
    b += 10
}

