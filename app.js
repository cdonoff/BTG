// JavaScript source code

const surveyQuestions = [
   {Question1: `My past experience gives me an advantage in this program`},
   {Question2: `There are clear ways to obtain support towards my goals`},
   {Question3: `I am overwhelmed and feel helpless`},
   {Question4: `I feel confident as a student of architecture`},
   {Question5: `I am satisfied and enjoy this program`} 
]

var firstname = document.getElementById('firstName').value
var lastname = document.getElementById('lastName').value
var emailtext = document.getElementById('emailtext').value

var studentData = {
    first_name: firstname,
    last_name: lastname,
    email: emailtext


}