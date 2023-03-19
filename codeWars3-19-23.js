// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

//Solution:

function doubleChar(str) {
  let single = str.split('')
  for(let i = 0; i < single.length; i++){
    single[i] = single[i] + single[i]
  }
  return single.join('')
}
