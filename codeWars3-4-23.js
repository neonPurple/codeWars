// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//My Solution:

function fakeBin(x){
  let array = x.split('')
  for (let i = 0; i < array.length; i++){
    if (Number(array[i]) < 5){
      array[i] = 0
    }
    else if (Number(array[i]) >= 5){
      array[i] = 1
    }   
  }
  return array.join('')
}