const userModel = require("../models/users.model");

// name: registerApi
// method: post
const registerApi = (req, res) => {
    const { username, email, password } = req.body;

    // email check if the user email is exists or not
    const userExists = userModel.find(data => data.email === email);

    if (userExists) {
        return res.json({ message: "User account already exists." });
    }

    let otp = Math.floor(1000 + Math.random() * 9999);

    const newUser = {
        id: Date.now().toString(),
        username,
        email,
        password,
        otp
    };
    userModel.push(newUser);
    console.log(otp);    // nodemailer
    res.json({ message: "User account created, check your console for login otp" });
}

// name: loginApi
// method: post
const loginApi = (req, res) => {
    const { email, password } = req.body;
    const otpPin = req.headers.pin;

    // credentials checkpoint
    const user = userModel.find(data => data.email === email && data.password === password);

    if(!user){
        return res.json({message: "Invalid Credentials"});
    }

    // otp pin checkpoint
    if(Number(otpPin) !== user.otp){
        return res.json({message: "Invalid login pin"})
    }
    res.json({message: "welcome back", name: user.username});
}

module.exports = {registerApi, loginApi};