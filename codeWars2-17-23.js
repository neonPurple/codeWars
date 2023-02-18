//The challenge: Create a function that removes the first and last character of a string

//My solution:

function removeChar(str){
    let array1 = str.split('')
    array1.pop()
    array1.shift()
    return array1.join('')
};