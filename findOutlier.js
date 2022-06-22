/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
*/


function findOutlier(integers){
    let int = 0;
    let evenArr = false;

    if ((integers[0] % 2 === 0 && integers[1] % 2 === 0) || (integers[1] % 2 === 0 && integers[2] % 2 === 0) || (integers[0] % 2 === 0 && integers[2] % 2 === 0)){
        evenArr = true;
    }
    if (evenArr === true){
        for (let i = 0; i < integers.length; i++){
            if (integers[i] % 2 !== 0){
                int = integers[i];
            }
        }
    }  
    if (evenArr === false){
        for (let i = 0; i < integers.length; i++){
            if (integers[i] % 2 === 0){
                int = integers[i];
            }
        }
    } 
    return int;
}


let arr1 = [2, 4, 0, 100, 4, 11, 2602, 36, 13];
let arr2 = [160, 3, 1719, 19, 11, 13, -21, 2];
console.log(findOutlier(arr1));
console.log(findOutlier(arr2));


