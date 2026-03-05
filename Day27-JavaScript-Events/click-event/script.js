const title = document.getElementById("title");
const button = document.getElementById("loginBtn");

button.addEventListener("click", () => {
    title.innerText = "Welcome Admin, You're logged in";
});