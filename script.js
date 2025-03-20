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

document.getElementById("signUpForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    alert(data.message);
});

document.getElementById("signInForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    const res = await fetch("http://localhost:5000/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    alert(data.message);
});
