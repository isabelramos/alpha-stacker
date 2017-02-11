// Create an array that contains the letters of the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var alphaStack = "";

// The stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) {
    for (var a=0; a<theAlphabetArray.length; a++) {
		if (a % 3 === 0) {
			alphaStack += " "; 
		}
    	alphaStack += theAlphabetArray[a]
		console.log(alphaStack);
	}
}

// Invoke the function and pass in the array
stackLetters(alphabet)