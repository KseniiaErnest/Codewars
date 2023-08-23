/* You woke up from a massive headache and can't seem to find your car key. You find a note with a clue that says:

"If you're reading this then I have left the state and am well on my way to freedom. Just to make things interesting, I have also provided something for you to track me with. Let the chase begin..."

Given an array of binary numbers, figure out and return the culprit's message to find out who took the missing car key.

['01000001', '01101100', '01100101', '01111000', '01100001', '01101110', '01100100', '01100101', '01110010'] => 
'Alexander'  */

function whoTookTheCarKey(message) {
  return message.map(binary => String.fromCharCode(parseInt(binary, 2))).join().replace(/\,/g, '');
}

// 1. Map through an array
// 2. parseInt(binary, 2) - converts the binary string into an integer. The second argument '2' tells the parseInt function that the input is in base 2 (binary).
// 3. String.fromCharCode() is then used to convert the integer back into a character. This character is based on the ASCII code value.
// 4. Convert array into a string with join().
// 5. replace(/\,/g, '') is used to replace all commas


