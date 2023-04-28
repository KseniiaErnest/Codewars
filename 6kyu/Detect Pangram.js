/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.  */

// My solutin:
function isPangram(string){
  const array = string.toLowerCase().replace(/[^a-z]/g, '').split('');

for (let i = 97; i <= 122; i++) {
  const char = String.fromCharCode(i);
  if (!array.includes(char)) {
    return false;
  } 
}
  return true
}

// Similar solution:
function isPangram(string) {
  const array = string.toLowerCase().replace(/[^a-z]/g, '').split('');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < alphabet.length; i++) {
    const char = alphabet[i];
    if (!array.includes(char)) { // check if the character is missing
      return false; // if missing, return false immediately
    }
  }
  return true; // if all characters are present, return true
}