// Unscramble the eggs.

// The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

// Example
// unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
// //             "B---eg---in---n---er---"

// My solution:
function unscrambleEggs(word){
  const re = /egg/;
  return word.split(re).join('');
 };

 // Other variations:
 //#1
 function unscrambleEggs(word){
  return word.replace(/egg/g, "");
};

//#2
function unscrambleEggs(word){
  return word.split("egg").join("")
}

