const surveyQuestions = [
    `My past experience gives me an advantage in this program`,
    `There are clear ways to obtain support towards my goals`,
    `I am overwhelmed and feel helpless`,
    `I feel confident as a student of architecture`,
    `I am satisfied and enjoy this program` 
 ]

var question = document.getElementById('question');
var backButton = document.getElementById('back');
var nextButton = document.getElementById('next');

var radio1 = document.getElementById("radio1")
var radio2 = document.getElementById("radio2")
var radio3 = document.getElementById("radio3")
var radio4 = document.getElementById("radio4")
var radio5 = document.getElementById("radio5")

var surveyResponses = [
    "resp1",
    "resp2",
    "resp3",
    "resp4",
    "resp5"
]

var page = 0;

backButton.addEventListener('click', function() {

    if (page === 0) {
        window.location.href = "SurveySignUp.html"
    
    } else if (page === 4) {
        page--
        nextButton.innerHTML = "<strong>Next</strong>"
        question.innerText = surveyQuestions[page];
        nextButton.classList.remove('finito')
    } else {
        page--
        question.innerText = surveyQuestions[page];
    }

})

nextButton.addEventListener('click', function() {

    if (document.querySelector('input[name="radioq"]:checked') === null) {
        return
    } 
    
    if (page < 4) {
        //store response
        //console.log("uhoh")
        surveyResponses[page] = document.querySelector('input[name="radioq"]:checked').value;
        page++
        question.innerText = surveyQuestions[page];
        radio1.checked = false;
        radio2.checked = false;
        radio3.checked = false;
        radio4.checked = false;
        radio5.checked = false;

    } 
    
    if (nextButton.classList.contains("finito")) {
        surveyResponses[page] = document.querySelector('input[name="radioq"]:checked').value;
        localStorage.setItem('question_1', surveyResponses[0]);
        localStorage.setItem('question_2', surveyResponses[1]);
        localStorage.setItem('question_3', surveyResponses[2]);
        localStorage.setItem('question_4', surveyResponses[3]);
        localStorage.setItem('question_5', surveyResponses[4]);
        window.location.href = "thankyou.html"
    } 
    
    if (page === 4) {
        //finished
        if (document.querySelector('input[name="radioq"]:checked') === null) {
            question.innerText = surveyQuestions[page];
            nextButton.innerHTML = "<strong>Submit</strong>"
            nextButton.classList.add('finito')
            return
        } else {
            surveyResponses[page] = document.querySelector('input[name="radioq"]:checked').value;
        }
    }

})

function surveyNav() {
    page = 0
    question.innerText = surveyQuestions[page];

    //Clear radio selections

    radio1.checked = false;
    radio2.checked = false;
    radio3.checked = false;
    radio4.checked = false;
    radio5.checked = false;
}