/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
*/

function invert(arr){
    let resArr = [];
    resArr = arr.map(function(x){
        return x * -1;
    })
    return resArr;
}

console.log(invert([1,2,3,4,5]));
console.log(invert([1,-2,3,-4,5]));
console.log([]);