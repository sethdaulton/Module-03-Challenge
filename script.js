var characterLength = 8;
var choiceArr = [];

var upperCaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var specialCharArray = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "{",
  "}",
  "[",
  "]",
  "|",
  "?",
  "<",
  ">",
];
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

function getPrompts() {
  choiceArr = [];

  characterLength = parseInt(
    prompt(
      "How many characters do you want your password to be? Must be between 8 and 128 characters"
    )
  );

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert(
      "Character length has to be a number, 8 - 128 digits. Please try again."
    );
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
