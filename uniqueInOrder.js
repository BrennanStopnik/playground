/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
*/

var uniqueInOrder=function(iterable){
    let finalArr = [];
    for (i in iterable){
        if (iterable[i] !== iterable[i] + 1){
            finalArr.push(iterable[i])
        }
    }
    return finalArr;
}
console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder([1,2,2,3,3]));