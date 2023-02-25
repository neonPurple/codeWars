// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

//My solution:

function countPositivesSumNegatives(input) {
    let negSum = 0
    let posCount = 0
    let results = []
    for (let i = 0; i < input.length; i++){
      if (input[i] > 0){
        posCount++
      } else if (input[i] < 0){
        negSum += input[i]
      }
    } 
    results.push(posCount)
    results.push(negSum)
    return results
  }