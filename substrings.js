let str = "The dog jumped on the couch";
//         012345678 
let subStr = str.substring(4,7); //gets the word dog

console.log(subStr);
console.log(str); //str remains intact

console.log(str.substring(8)); //gets from current index parameter to the end of the string

//length of substring "dog" = 3
console.log(subStr.length);