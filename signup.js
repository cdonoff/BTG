var firstname = document.getElementById('firstName');
var lastname = document.getElementById('lastName');
var emailtext = document.getElementById('emailtext');
var studentYear = document.getElementById('yearselector'); 
var form = document.getElementById('form');

form.addEventListener('submit', function() {

    const date = new Date();
    const month = date.getMonth();
    const monthName = date.toLocaleString('default', {
        month: 'long',
    });

    var studentData = {
        first_name: firstname,
        last_name: lastname,
        email: emailtext,
        year: studentYear,
        month: monthName
    }

    studentData.first_name = firstname.value;
    studentData.last_name = lastname.value;
    studentData.email = emailtext.value;
    studentData.year = studentYear.value;

    localStorage.setItem('first-name', studentData.first_name);
    localStorage.setItem('last-name', studentData.last_name);
    localStorage.setItem('email', studentData.email);
    localStorage.setItem('year', studentData.year);
    localStorage.setItem('month', studentData.month);
})