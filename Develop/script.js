// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercasechar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercasechar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numboxchar = ["0", "8", "1", "2", "9", "3", "4", "5", "6", "7"];
var symboxchar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "{", "}", "]", "[", ";", ":", "?", "/", ".", "<", ","];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function createPassword () {
  var charLength = parseInt(prompt("How many characters do you want in your password?"));
  if (charLength < 8 || charLength > 128) {
    window.alert("Pick a number between 8 and 128 punk.");
    createPassword();
  } else {
    var lcChoice = lowersChoice();
    var ucChoice = uppersChoice();
    var numChoice = numbersChoice();
    var symChoice = symbolsChoice();
  }
}
function lowersChoice () {
  var lcChars = confirm("Do you want to use lowercase letters in your password?");
  var lcChoice = lcChars;
  return lcChoice;
};
function uppersChoice ();
function numbersChoice ();
function symbolsChoice ();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
