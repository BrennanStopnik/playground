/*Filter*/
//take only the even numbers from this array and add them to the output array
//by doing that, we've filtered out only the even numbers
let numbers1 = [20, 22, 23, 26, 35];

let output1 = [];

for(let i = 0; i < numbers1.length; i++){

    if(numbers1[i] % 2 === 0){
        output1.push(numbers1[i]);
    }

}

console.log("Even numbers: ");
console.log(output1);

//.filter
/*
array methods that takes in a function as a parameter and adds items to a result array based on the condition inside the function
syntax

let resultArray = arrayToFilter.filter(function(x){
   return condition //if x meets condition, add it to result array.  if not, skip it 
}

)

x represents each item in our arrayToFilter

*/

let outputFilter = numbers1.filter(function(num){
    return num % 2 === 0; 
    //if the num % 2 is equal to 0 (it's an even number) then add that number to our outputFilter array (our result array)
});

console.log("Even numbers (filter): ");
console.log(outputFilter);


let strings1 = ['word', 'phone', 'quack', 'wall', 'floor', 'tv', 'light'];

let stringOutputFilter = strings1.filter(function(str){
    return str.length >= 5;
});

console.log("Strings greater than or equal to 5 chars: ");
console.log(stringOutputFilter);

/* map */

let numbers2 = [3, 5, 10, 12];

let output2 = [];

//double every number in numbers2 and add each of them to my output2 array

for(let i = 0; i < numbers2.length; i++){
    let result = numbers2[i] * 2;
    output2.push(result);
}

console.log("Doubled numbers: ")
console.log(output2);

/*
map
apply an operation on each number in our arrayToMap

let resultArray = arrayToMap.map(function(x){
    return (operation to perform on each item (x) in arrayToMap)
})

*/

let output2Map = numbers2.map(function(num){
    return num * 2; //doubles every number in numbers2 and adds to output2Map array
})

console.log('Doubled (map): ')
console.log(output2Map);


let strings2 = ['dog', 'cat', 'bear', 'lion'];
//add an 's' to every string in the array 

let stringsMap = strings2.map(function(str){
    return str + 's';
})

console.log('Plurals (map): ')
console.log(stringsMap);


/* Reduce */

let numbers3 = [1,2,3];

let total = 0;

for(let i = 0; i < numbers3.length; i++){
    total += numbers3[i];
}

console.log('Sum of array: ');
console.log(total);

/*
Reduce 
take every item in your array and put them together OR add them together into 1 singular value

let resultArray = arrayToReduce.reduce(function(total,currentValue){
    return total + currentValue
}, initialValue)

//total becomes the new total just like with += on each iteration in a loop, but you do not use the += so be careful

*/
//reduce takes in 2 parameters
//first, the function with the operation and next, your initial starting value

let totalReduce = numbers3.reduce(function(total, num){
    return total + num;
}, 0) //starting value, if not added it will default to 0

console.log('Sum of array: (reduce)');
console.log(totalReduce);

let strings3 = ["The ", "day ", "is ", "over", "!"];

let stringReduce = strings3.reduce(function(newStr, str){
    return newStr + str;
}, "");

console.log("Concatenate each string: ");
console.log(stringReduce);
