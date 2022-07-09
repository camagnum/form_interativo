const btnSignIn = document.querySelector('.btn-sign-in');
const btnSignUp = document.querySelector('.btn-sign-up');
var body = document.body;

btnSignIn.addEventListener('click', () => {
    body.classList.add("sign-in-js");
    body.classList.remove("sign-up-js");
})

btnSignUp.addEventListener('click', () => {
    body.classList.remove("sign-in-js");
    body.classList.add("sign-up-js");
})
