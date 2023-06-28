/* A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.  */

function dominator(arr) {
  let dominator = arr[0];
  let sumOfD = 1;
  // Start the count at 1 for the initial dominator

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === dominator) {
      sumOfD++;
    } else {
      sumOfD--;
    } 
  
    if (sumOfD === 0) {
      dominator = arr[i];
      sumOfD = 1;
      // Reset the count for the new dominator 
    }
  }
  
  
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] === dominator) {
      sumOfD++;
    }
  }
  
  if (sumOfD > arr.length/2) {
    return dominator;
  } else {
    return -1;
  }
}

// Explanations:
// Usage of a voting algorithm
/* 
- Start with an assumption that the first element of the array is the dominator.
- Iterate through the array starting from the second element.
- Keep a count of the dominator occurrence so far.
- If the current element matches the dominator, increment the count.
- If the current element does not match the dominator, decrement the count.
- If the count becomes zero, update the dominator assumption to the current element.
- After the initial loop, where we determine the assumed dominator, we need to perform a final check to confirm whether the assumed dominator is indeed the dominator of the array. 
- After iterating through the entire array, check if the assumed dominator occurs more than half the length of the array.
- If it does, return the assumed dominator as the result.
- If it doesn't, return -1 to indicate no dominator exists. 
*/