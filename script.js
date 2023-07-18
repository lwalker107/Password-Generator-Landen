// Assignment Code
var generateBtn = document.querySelector("#generate");

var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';
var num = '0123456789';
var special = ' !"$%^&*(){}[];#,./:@~<>?|_+-=';
var minLen = 8;
var maxLen = 128;







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Create function that prompts user for inputs for criteria
function generatePassword() {
  const confirmQuestion = confirm("Now I will walk you through a series of prompts to help you create your secure password!")
  var condition = false
  var password_criteria = []
  var new_password = ""
  var length = 0

  while (condition === false) {
    const question1 = prompt("First we would like to know how long would you like your new password to be? Please type a numerical value that is at between 8 and 128 characters to begin:");
    length = question1;
      if (length >= 8 && length <= 128) {
        break;
      } else {
        alert("Your password can't be that length!");
      }
    }

  while (condition === false) {
    const question2 = prompt("Would you like to include uppercase letters in your new password? Please enter yes or no as your response.");
      if (question2 === "yes") {
        alert("Great we shall add that to the criteria for your new password!");
        password_criteria.push(upper);
        break
      } else if (question2 === "no") {
        alert("Ok we will not include this in your criteria!");
        break;
      } else {
        alert("Please enter a yes or no as a response.")
      }
    }

  while (condition === false) {
    const question3 = prompt("Would you like to include lowercase letters in your new password? Please enter yes or no as your response.");
      if (question3 === "yes") {
        alert("Great we shall add that to the criteria for your new password!");
        password_criteria.push(lower);
        break
      } else if (question3 === "no") {
        alert("Ok we will not include this in your criteria!");
        break;
      } else {
        alert("Please enter a yes or no as a response.")
      }
    }
  
    while (condition === false) {
      const question4 = prompt("Ok how are we feeling about adding in special characters in your new password? Please enter yes or no as your response.");
        if (question4 === "yes") {
          alert("Great we shall add that to the criteria for your new password!");
          password_criteria.push(special);
          break
        } else if (question4 === "no") {
          alert("Ok we will not include this in your criteria!");
          break;
        } else {
          alert("Please enter a yes or no as a response.")
        }
      }
    
    while (condition === false) {
      const question5 = prompt("Almost done... would you like to add numbers to your new password? Please enter yes or no as your response.");
        if (question5 === "yes") {
          alert("Great we shall add that to the criteria for your new password!");
          password_criteria.push(num);
          break
        } else if (question5 === "no") {
          alert("Ok we will not include this in your criteria!");
          break;
        } else {
          alert("Please enter a yes or no as a response.")
        }
      }
        

    for (var i = 0; i < length; i++ ) {
      password_criteria = password_criteria.toString();
      var random = Math.floor(Math.random() * password_criteria.length);
      new_password += password_criteria[random];
    }

      return new_password;
      
        

}

// Add Event Listener to Generate Button
generateBtn.addEventListener("click", writePassword)

