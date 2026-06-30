const userModel = require("../model/user.model");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// registerApi
// method: POST,
// access: Public
const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // logic 1: email check
        const emailCheck = await userModel.findOne({ email });
        // boolean: true{email is exists in our db} (or) false{email does'nt exists in our db}
        if (emailCheck) {
            return res.status(400).json({ message: "User account already exists" });
        }

        // logic 2: password hashing
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({ username, email, password: hashedPassword });

        res.status(201).json({ message: "User account created" });

    } catch (err) {
        res.status(500).json(err.message);
    }
};

// loginApi
// method: POST,
// access: Public
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if(!user){
            return res.status(404).json({ message: "User account not found" });
        }

        // crucial: step
        // compare(dynamic function) - body(password) - hash
        // compare - body hash === db hash
        const passwordMatch = await bcrypt.compare(password, user.password);

        if(!passwordMatch){
            return res.status(401).json({message: "Invalid Password"});
        }

        // server creates a jwt token
        // sign function holds 3 parameters
        // 1 user details to encrypt in the token
        // 2 secret key
        // 3 expiry time
        const token = jwt.sign(
            {userId: user._id, username: user.username, email: user.email},
            process.env.jwt_secret,
            {expiresIn: '24h'}
        );

        res.status(200).json({message: "Login Successful", token});

    } catch (err) {
        res.status(500).json(err.message);
    }
}

module.exports = { registerUser, loginUser };