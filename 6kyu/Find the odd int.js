// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// My Solution:
function findOdd(A) {
  let count = {};

  for (let num of A) {
    if (count[num] === undefined) {
      count[num] = 1;
    } else {
      count[num] += 1;
    }
  }

  const array = Object.entries(count).filter((element) => element[1] % 2 !== 0);
  return Number(array[0][0]);
}


// Other intresting solutions:
// #1
function findOdd(A) {
  let obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}

// #2
const findOdd = A => A.filter(x => A.filter(v => x === v).length % 2 === 1).reduce(a => a);
