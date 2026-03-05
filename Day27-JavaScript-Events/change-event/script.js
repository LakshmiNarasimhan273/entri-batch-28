const password = document.getElementById("passwordInput");
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
    if(checkbox.checked){
        password.type = "text";
    }else{
        password.type = "password";
    }
})