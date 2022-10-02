var characterLength = 8;
var choiceArr = [];

var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharArray = [ "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "{", "}", "[", "]", "|", "?", "<", ">"];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
 
}
function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts(){
  choiceArr = [];

  characterLength = parseInt(prompt("How many characters do you want your password to be? Must be between 8 and 128 characters"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number, 8 - 128 digits. Please try again.");
    return false;
  }

  if (confirm("Would you like lowercase letters in your password?")) {
  choiceArr = choiceArr.concat(lowerCaseArray);
  }

  if (confirm("Would you like UPPERCASE letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArray);
    }

  if (confirm("Would you like special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharArray);
    }

    if (confirm("Would you like numbers in your password?")) {
      choiceArr = choiceArr.concat(numbersArray);
      }

      return true;

}

//   var newPassword = ""
//   var passwordLength = prompt("How long do you want this password? Must be between 8 and 128 characters");
//   if ((passwordLength > 128) || (passwordLength < 8)){
//     alert("Password must be between 8 and 128 characters");
//     generatePassword();
//   }

//   var wantLowerCase = confirm("Do you want to use lowercase letters?");
//   if (wantLowerCase == true) {
//     alert ("You want lowercase!")
//   }
//     else{
//       alert ("You don't want lowercase")
//     }

//   var wantUpperCase = confirm("Do you want to use UPPERCASE letters?");
//   if (wantUpperCase == true){
//     alert("You want UPPERCASE!")
//   }
//     else{
//       alert("You don't want UPPERCASE!")
//     }

//   var wantSpecialChar = confirm("Do you want to use special characters?");
//   if (wantSpecialChar == true)
//   alert("You want special characters!")
//     else{
//       alert("You don't want special characters!")
//     }

//   var wantNumber = confirm("Do you want to use numbers?");
//   if (wantNumber == true)
//   alert("You want numbers!")
//   else{
//     alert("You don't want numbers!")
//   }

//   for (let index = 0; index < passwordLength; index++) {
//     var randomIndex = getRandomNumber(characterArray.length);
//     var randomCharacter = characterArray[randomIndex];
//     newPassword += randomCharacter;
//   }

//   return newPassword;

// }

// function getRandomNumber(max) {
//   return Math.floor(Math.random() * max);
// }


