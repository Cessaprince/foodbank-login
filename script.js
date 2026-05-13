// get the elements from the html document with the following id's

const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');


// use the event listener function to response to the submit event 
form.addEventListener('submit', function () {

    // 1. ensure the email and password input have value before the login will be sucessful
    let emailValue = emailInput.value;
    let passwordValue = passwordInput.value;


    // what happens when the email input is empty 
    if (emailValue === '') {
        alert('Email required!')
        return
    }

    // what happens when the password input is empty

    if (passwordValue === '') {
        alert('Password required')
        return
    }

    alert('Login Successful');
})