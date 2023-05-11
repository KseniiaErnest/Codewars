/* Define a method/function that removes from a given array of integers all the values contained in a second array.

Examples (input -> output):
* [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
* [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
* [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1] */

// My solution:
Array.prototype.remove_ = function(integer_list, values_list){
  let newArr = [];
 
integer_list.forEach(element => {
  if (!values_list.includes(element)) {
    newArr.push(element);
  }
})
 return newArr;
}

//Other variations:
// 1.
Array.prototype.remove_ = function(integer_list, values_list){
  let newArr = [];
  
  for (let i = 0; i < integer_list.length; i++) {
    if (!values_list.includes(integer_list[i])) {
      newArr.push(integer_list[i]);
    }
  }
  return newArr;
}

// 2.
Array.prototype.remove_ = function(integer_list, values_list){
  return integer_list.filter(element => !values_list.includes(element))
}