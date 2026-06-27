const userModel = require("../model/user.model");

const bcrypt = require("bcryptjs");

// registerApi
// method: POST,
// access: Public
const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // logic 1: email check
        const emailCheck = await userModel.findOne({ email });

        if(emailCheck){
            return res.status(400).json({message: "User account already exists"});
        }

        // logic 2: password hashing
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({ username, email, password: hashedPassword });

        res.status(201).json({ message: "User account created" });

    } catch (err) {
        res.status(500).json(err.message);
    }
};

module.exports = { registerUser };