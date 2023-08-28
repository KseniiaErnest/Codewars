/* Description:
Complete function findSequences. It accepts a positive integer n. Your task is to find such integer sequences:

Continuous positive integer and their sum value equals to n

For example, n = 15 
valid integer sequences:
[1,2,3,4,5]  (1+2+3+4+5==15)
[4,5,6]          (4+5+6==15)
[7,8]              (7+8==15)
The result should be an array [sequence 1,sequence 2...sequence n], sorted by ascending order of the length of sequences; If no result found, return [].

Some examples:

findSequences(3) === [[1,2]]

findSequences(15) === [[7,8],[4,5,6],[1,2,3,4,5]]

findSequences(20) === [[2, 3, 4, 5, 6]]

findSequences(100) === [[18, 19, 20, 21, 22], [9, 10, 11, 12, 13, 14, 15, 16]]

findSequences(1) === []  */



// For example, n = 15
function findSequences(n){
  const array = [];
  
  // Create an array of consecutive integers from 1 to n;
  // in casee of 15, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
   for (let i = 1; i <= n; i++) {
     array.push(i);
   };
    
   // The final result array, that holds all combinations
   const combination = []; 
    
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    const currentArray = [];
    // The variable that hold the current combination that will be pushed later on
    
    // Start summing from the current index
    for (let j = i; j < array.length; j++) {
      sum += array[j];
      currentArray.push(array[j]);
      
      if (sum === n) {
        combination.push(currentArray.slice()); // Push a copy of the currentArray
        break; // No need to continue, as we've reached the desired sum
      };
      
      if (sum > n) {
        break; // Stop when sum becomes greater than n
      }
    }
  }
  
  combination.pop(); // Get rid of the last value as its going to be equal to n
  return combination.sort((a, b) => a.length - b.length);
  }

  // About slice
  /* Pushing a copy of currentArray into the combination array is done to prevent potential issues related to array mutation. When you push an array into another array without using slice() or other methods to create a copy, you're actually pushing a reference to the same array.
   This means that if you later modify the currentAr array, those modifications will also affect the arrays already pushed into the combination array.
By using currentArray.slice(), you create a new array that is a shallow copy of currentArray. This ensures that each array pushed into the combination array is distinct and won't be affected by future modifications to currentArray.  */