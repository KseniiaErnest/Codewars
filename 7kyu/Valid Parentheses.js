/* Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= length of input <= 100

All inputs will be strings, consisting only of characters ( and ).
Empty strings are considered balanced (and therefore valid), and will be tested.
For languages with mutable strings, the inputs should not be mutated.  */


// A stach data structure approach

function validParentheses(parenStr) {
  const stack = [];
   
  for (let i = 0; i < parenStr.length; i++) {
    if (parenStr[i] === '(') {
      stack.push('('); // Push an opening parenthesis onto the stack
    } else if (parenStr[i] === ')' && stack.length > 0) {
      stack.pop(); // Remove a matching opening parenthesis from the stack
    } else {
      return false; // If an unmatched closing parenthesis is encountered, or stack is empty
    }
  }
   
   return stack.length === 0; // If the stack is empty, all parentheses are matched
 }

 // or

 function validParentheses(parenStr) {
  let curr = 0;
  for(let i = 0; i < parenStr.length; i++) {
    if (parenStr[i] === '(') {
      curr++;
    } else {
      curr--;
    }
    if (curr < 0) {
      return false;
    }
  }
  return curr === 0;
}
