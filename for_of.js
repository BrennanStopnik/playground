/*
A for of loop is only for going through the entirety of the array. 
If you need to do something else, go through a regular for loop or a while loop.
*/

let arr = ['Red', 'Green', 'Yellow', 'Purple', 'Blue'];

// Regular "for loop"
console.log("\n'For' Loop");

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// "For of loop"
console.log("\n'For Of' Loop");

for (let color of arr){
    console.log(color);
}

let things = ['cup', 'wallet', 'food', 'stuff']

console.log('\n')

for (let x of things){
    console.log(x)
}

let str = "Hello World."
console.log('\n')

for (let i of str){
    console.log(i)
}


// This is a time when you wouldn't use a for of loop. 
    // When you want to get a certain number
console.log('\n')
for (let i = 2; i < things.length; i++){
    console.log(things[i]);
}

// The difference in how each loop needs to get the same thing.

console.log("\n'For' Loop");
for (let i = 0; i < things.length; i++){
    console.log("item " + i + " - " + things[i]);
}

console.log("\n'For Of' Loop");
let z = 0;
for (let x of things){
    console.log("item " + z + " - " + x);
    z++
}

console.log("\n'While' Loop");
let y = 0;
while (y < things.length){
    console.log("item " + y + " - " + things[y]);
    y++;
}