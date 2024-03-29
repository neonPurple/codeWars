// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// The first argument can be an empty string

// In languages with no distinct character data type, the second argument will be a string of length 1

//Solution:

function strCount(str, letter){  
    let count = 0;
    let position = str.indexOf(letter);
    while ( position !== -1) {
     count++
     position = str.indexOf(letter, position+1)
    }
    return count
 }