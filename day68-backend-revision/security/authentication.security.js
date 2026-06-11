const userModel = require("../models/users.model");

// registerApi
const registerApi = (req, res) => {
    const {username, email, password} = req.body;

    const userExists = userModel.find(data => data.email === email);

    if(userExists){
        return res.status(400).json({message: "User account already exists"});
    };

    let otp = Math.floor(1000 + Math.random() * 9999);

    const newUser = {
        id: Date.now().toString(),
        username,
        email,
        password,
        otp
    };
    userModel.push(newUser);
    console.log("Notification: Your OTP for login, don't share with anyone", otp);
    res.status(201).json({message: "User account created"});
}

// loginApi
const loginApi = (req, res) => {
    const {email, password} = req.body;
    const loginpin = req.headers.pin;

    const user = userModel.find(data => data.email === email && data.password === password);

    if(!user){
        return res.status(401).json({message: "Invalid Credentials"});
    };

    if(Number(loginpin) !== user.otp){
        return res.status(401).json({message: "Invalid login pin"});
    }

    res.status(200).json({message: "Login successful"});
};

module.exports = {registerApi, loginApi};