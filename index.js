
function hiding() {
    document.querySelector(".page").classList.toggle('hide')
    document.querySelector(".page_reply").classList.toggle('hide')
}
button = document.querySelector(".submit_button").addEventListener('click', hiding);
button_hiden = document.querySelector(".hiden_button").addEventListener('click', hiding);

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

const emailInput = document.getElementById('email');
const error = document.getElementById("error");
emailInput.focus()

emailInput.onblur =  function() {
    const email = emailInput.value;
    if (!validateEmail(email)) {
        emailInput.classList.add('invalid');
        error.innerHTML = 'Please enter a valid email.';
    }
};

emailInput.onfocus = function() {
    if (this.classList.contains('invalid')) {
        // Remove the error indicator as the user wants to input data again
        this.classList.remove('invalid');
        error.innerHTML = "";
    }
};
