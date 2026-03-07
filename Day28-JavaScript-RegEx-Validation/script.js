const form = document.getElementById("paymentForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const card = document.getElementById("cardnumber").value;
    const cvv = document.getElementById("cvvnumber").value;
    const expiry = document.getElementById("expiry").value;
    const otp = document.getElementById("otp").value;

    // RegEx patterns

    // username pattern
    // Narasimhan 
    const usernamePattern = /^[A-Za-z]{3,}$/;

    // email pattern
    // narasimhan@gmail.com 2001
    // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    
    const cardPattern = /^\d{16}$/;
    const cvvPattern = /^\d{3}$/;

    // Mobile Number pattern
    // const mobileNumber = /^\d{10}$/;

    // password pattern
    // const passwordPattern = /^[a-zA-Z0-9._$-*@!#]{8,}$/; split [0]
    
    // Expiry - MM/YY - 06/26 - 12/33
    // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
    // MM - 0-12 - 45
    // YY - any numbers with only 2 digits
    const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;

    const otpPattern = /^\d{4}$/;

    if(!usernamePattern.test(username)){
        document.getElementById("username-error").innerText = "Invalid Username";
        return;
    }else{
        document.getElementById("username-error").innerText = "";
    }

    if(!emailPattern.test(email)){
        document.getElementById("email-error").innerText = "Invalid Email";
        return;
    }else{
        document.getElementById("email-error").innerText = "";
    }

    if(!cardPattern.test(card)){
        document.getElementById("cardnumber-error").innerText = "Card number must be 16 digits";
        return;
    }else{
        document.getElementById("cardnumber-error").innerText = "";
    }

    if(!cvvPattern.test(cvv)){
        document.getElementById("cvv-error").innerText = "CVV Number must be 3 digits";
        return;
    }else{
        document.getElementById("cvv-error").innerText = "";
    }

    if(!expiryPattern.test(expiry)){
        document.getElementById("expiry-error").innerText = "Expiry must be in this format(MM/YY)";
        return;
    }else{
        document.getElementById("expiry-error").innerText = "";
    }

    if(!otpPattern.test(otp)){
        document.getElementById("otp-error").innerText = "OTP must be 4 digits";
        return;
    }else{
        document.getElementById("otp-error").innerText = "";
    }
    form.reset();
    // Submission
    window.location.href = "success.html";

})