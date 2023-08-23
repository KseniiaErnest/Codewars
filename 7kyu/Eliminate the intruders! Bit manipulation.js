/* Task
You are given a string representing a number in binary. Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's).

In practice, you should implement this function:

function eliminateUnsetBits(number);
Examples
eliminateUnsetBits("11010101010101") ->  255 (= 11111111)
eliminateUnsetBits("111") ->  7
eliminateUnsetBits("1000000") -> 1
eliminateUnsetBits("000") -> 0  */

function eliminateUnsetBits(number) {
  const newString = number.split('').filter(num => num === '1').join('');
    
    if (newString === '') {
      return 0
    }
    
  return parseInt(newString, 2)
  }


  /* After getting rid of the unset bits and obtaining the binary number represented as a string, you can convert this binary string to the corresponding result number using JavaScript's built-in parseInt function. The parseInt function allows you to specify the base for conversion, and since you're dealing with binary, you'll set the base to 2. */