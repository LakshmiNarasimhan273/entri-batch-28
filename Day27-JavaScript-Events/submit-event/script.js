const form = document.getElementById("paymentForm");

const username = document.getElementById("username");
const cardnumber = document.getElementById("cardnumber");
const cvv = document.getElementById("cvvnumber");

const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(username.value === "" || cardnumber.value === "" || cvv.value === ""){
        error.innerText = "All fields are required";
    } else {
        error.innerText = "";
        error.innerText = "Payment Successful";
    }
})