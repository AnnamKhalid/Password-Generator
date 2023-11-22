// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
  // Function to prompt user for password options
  function getPasswordOptions() {
  

  var lowercase = confirm(" Should your password include lowercase characters?")
  
  var uppercase = confirm( " Should your password include uppercase characters?")

  var number = confirm(" Should your password include numeric characters?")

  var specialChar = confirm(" Should your password include special characters?")

if (!lowercase && !uppercase && !number && !specialChar) {
  alert("Character type not selected. Please select at least one character type." );
}

};
getPasswordOptions();

  // Function for getting a random element from an array
  var allArrCombined = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);

  function getRandom() {
    var index = Math.floor(Math.random() * allArrCombined.length);
    console.log(allArrCombined[index])
    return allArrCombined[index];
  };
   getRandom();

  
  // Function to generate password with user input
  function generatePassword() {
    var passwordLength = prompt("How many characters do you want in your password? (8-128)");

    if (passwordLength < 8 || passwordLength > 128) {alert("Password length must be between 8 and 128 characters");
    return generatePassword();} 
      else {var newPassword = "";
        for (var i = 0; i <passwordLength; i++){newPassword += getRandom();
        }
        console.log(newPassword);
        return newPassword;
      } 
    }
   generatePassword();


  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);