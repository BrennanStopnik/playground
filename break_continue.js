/*
Break ends your loop immediately whenever you put in the break statement

Continue lets you skip over an index or number in an array or range. 
*/

console.log("\n Break at number")
for (let i = 0; i < 10; i++){
    if (i === 5){
        break;
    }
    console.log(i);
}

let weather = ['sunny', 'cloudy', 'rainy', 'snowy'];

console.log("\n Break at index")
for (let i = 0; i < weather.length; i++){
    if (weather[i] === 'rainy'){
        console.log("Index of rainy is " + i);
        break;
    }
    console.log(weather[i]);
}   


console.log("\n Continue at number")
for (let i = 0; i < 10; i++){
    if (i === 5){
        continue;
    }
    console.log(i);
}


console.log("\n Continue at index")
for (let i = 0; i < weather.length; i++){
    if (weather[i] === 'rainy'){
        continue;
    }
    console.log(weather[i]);
}   