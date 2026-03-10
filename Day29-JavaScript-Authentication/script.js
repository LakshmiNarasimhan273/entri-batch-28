// SIGNUP
const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;

        // input field validation

        const user = {
            userEmail: email,
            userPassword: password
        };

        localStorage.setItem("user", JSON.stringify(user));
        // stringify - object -> JSON
        alert("Registration Successful");

        // replace bootstrap modal

        window.location.href = "index.html";

    })
}

// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        // input validation

        const storedUser = JSON.parse(localStorage.getItem("user"));
        // JSON -> object

        if(!storedUser){
            alert("No user found. Please register first");
            // replace bootstrap modal
            return;
        }

        if(email === storedUser.userEmail && password === storedUser.userPassword){
            localStorage.setItem("isLoggedin", true);
            window.location.href = "dashboard.html";
        }else{
            alert("Invalid Credentials");
        }

    })
}

// DASHBOARD
const welcomeText = document.getElementById("welcomeText");

if(welcomeText){
    const isLoggedin = localStorage.getItem("isLoggedin");
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if(!isLoggedin){
        window.location.href="index.html";
    }

    welcomeText.innerText = "Welcome " + storedUser.userEmail;
}

// LOGOUT
function logout(){
    localStorage.removeItem("isLoggedin");
    window.location.href = "index.html";
}