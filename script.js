// JavaScript source code

const surveyQuestions = [
   {Question1: `My past experience gives me an advantage in this program`},
   {Question2: `There are clear ways to obtain support towards my goals`},
   {Question3: `I am overwhelmed and feel helpless`},
   {Question4: `I feel confident as a student of architecture`},
   {Question5: `I am satisfied and enjoy this program`} 
]

var firstname = document.getElementById('firstName')
var lastname = document.getElementById('lastName')
var emailtext = document.getElementById('emailtext')
var studentYear = document.getElementById('yearselector') 
var form = document.getElementById('form')

var studentData = {
    first_name: firstname,
    last_name: lastname,
    email: emailtext,
    year: studentYear
}

form.addEventListener('submit', function() {

    studentData.first_name = firstname.value;
    studentData.last_name = lastname.value;
    studentData.email = emailtext.value;
    studentData.year = studentYear.value;

    localStorage.setItem('first-name', studentData.first_name);
    localStorage.setItem('last-name', studentData.last_name);
    localStorage.setItem('email', studentData.email);
    localStorage.setItem('year', studentData.year);
})

