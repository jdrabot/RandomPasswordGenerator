// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercasechar = "abcdefghijklmnopqrstuvwxyz";
var uppercasechar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numboxchar = 0812934567;
var symboxchar = "~!@#$%^&*()_-+{}][;:]?/.><,";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  window.prompt ("Do you want to include lowercase letters?");
  window.prompt ("Do you want to include uppercase letters?");
  window.prompt ("Do you want to include numbers?");
  window.prompt ("Do you want to include symbols?");
