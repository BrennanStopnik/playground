/*
How to find the lowest number in the array.
WOrks the same with the highest if you change the greater than sign.
*/

// LOWEST NUMBER

function lowestNumber(arr){
    let lowest = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < lowest){
            lowest = arr[i];
        }
    }
    return lowest;
}

let lowArray = [3, 4, 50, 5, 2, 45];
console.log(lowestNumber(lowArray));

// HIGHEST NUMBER

function highestNumber(arr){
    let highest = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > highest){
            highest = arr[i];
        }
    }
    return highest;
}

let highArray = [3, 4, 50, 5, 2, 45];
console.log(highestNumber(highArray));