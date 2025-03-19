const signInForm = document.getElementById("signInForm");
const signUpForm = document.getElementById("signUpForm");
const toggleBtn = document.getElementById("toggleBtn");
const switchToSignUp = document.getElementById("switchToSignUp");
const switchToSignIn = document.getElementById("switchToSignIn");

switchToSignUp.addEventListener("click", (e) => {
    e.preventDefault();
    signInForm.classList.add("hidden");
    signUpForm.classList.remove("hidden");
    toggleBtn.innerText = "Sign In";
});

switchToSignIn.addEventListener("click", (e) => {
    e.preventDefault();
    signUpForm.classList.add("hidden");
    signInForm.classList.remove("hidden");
    toggleBtn.innerText = "Sign Up";
});