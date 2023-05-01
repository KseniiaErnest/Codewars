/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] */

// My solution:
function moveZeros(arr) {
  let nonZeros = [];
 let zeroCount = 0;

 for (let i = 0; i < arr.length; i++) {
   if (arr[i] !== 0) {
     nonZeros.push(arr[i]);
   } else {
     zeroCount++;
   }
 }

 for (let i = 0; i < zeroCount; i++) {
   nonZeros.push(0);
 }

 return nonZeros;
}

// 1. Create an empy arrow _nonZeroes_ to hold non-zero element;
// 2. Create a variable to keep track of the number of zeros founs;
// 3. Loop through each lement of the array _arr_ with condition:
// --- if the element id non-zero, then add it _nonZeros_ array
// --- if the element is a zero, then increament zeroCount;
// 4. Also if zeros were found, we need to loop through zeroCount to push them all in the end of _nonZeros_ array;
// 5. Return _nonZeros_