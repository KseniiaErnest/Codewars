// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// My Solution:
function noOdds( values ){
  const newArr = values.filter(value => value % 2 === 0);
  return newArr;
}

/* function noOdds( values ){
  // Return all non-odd values
  return values.filter(function(data){
    return data % 2 === 0
  });
}*/