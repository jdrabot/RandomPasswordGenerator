// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercasechar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercasechar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numboxchar = ["0", "8", "1", "2", "9", "3", "4", "5", "6", "7"];
var symboxchar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "{", "}", "]", "[", ";", ":", "?", "/", ".", "<", ","];

// this function writes out the generated password onto the screen
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// as the name suggests, this function generates the password
function generatePassword() {
  var charLength = parseInt(prompt("How many characters do you want in your password loser?"));
  // makes sure the password is between 8 and 128 characters long
  if (charLength < 8 || charLength > 128) {
    alert("Pick a number between 8 and 128 punk.");
    generatePassword();
  } else {
    var lcChoice = lowersChoice();
    var ucChoice = uppersChoice();
    var numChoice = numbersChoice();
    var symChoice = symbolsChoice();
    // this is our empty array that we will concat the other arrays into for the password
    var firstPass = [];
    if (!lcChoice && !ucChoice && !numChoice && !symChoice) {
      alert("You must pick at least one you piece of garbage!");
      generatePassword();
    } 
    if (lcChoice) {
      firstPass = firstPass.concat(lowercasechar);
    }
    if (ucChoice) {
      firstPass = firstPass.concat(uppercasechar);
    }
    if (numChoice) {
      firstPass = firstPass.concat(numboxchar);
    }
    if (symChoice) {
      firstPass = firstPass.concat(symboxchar);
    }
    for(var i = 0; i < charLength; i++) {
      password += firstPass[Math.floor(Math.random() * firstPass.length)];
    }
  }
  return password;
}
// These functions create pop up windows asking for the desired characters in the user's password
function lowersChoice () {
  var lcChars = confirm("Do you want to use lowercase letters in your password?");
  var lcChoice = lcChars;
  return lcChoice;
};
function uppersChoice () {
  var ucChars = confirm("Do you want to use uppercase letters in your password?");
  var ucChoice = ucChars;
  return ucChoice;
};
function numbersChoice () {
  var numChars = confirm("Do you want to use numbers in your password?");
  var numChoice = numChars;
  return numChoice;
};
function symbolsChoice () {
  var symChars = confirm("Do you want to use symbols in your password?");
  var symChoice = symChars;
  return symChoice;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
