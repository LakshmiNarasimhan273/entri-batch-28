const getusers = (req, res) => {
    res.json(
        {
            username: "Narasimhan",
            email: "narasimhan@mail.com",
            role: "Mentor"
        });
};

// export default getusers;
module.exports = {getusers};