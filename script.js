const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();

    // check for email validation
    const email = form['email'];
    const emailValue = email.value;
    const small = form.querySelector('small');

    if(!emailValue) {
        // say it's empty
        email.classList.add('error');
        small.innerText = 'Email field cannot be blank.';
        small.style.display = 'inline-block';
    } else if(!isValidEmail(emailValue)) {
        // say it's invalid
        email.classList.add('error');
        small.innerText = 'Please enter a valid email address.';
        small.style.display = 'inline-block';
    } else {
        // submit it
        email.classList.remove('error');
        small.innerText = '';
        small.style.display = 'none';
    }
});

// email validation regex code from stack overflow
function isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}