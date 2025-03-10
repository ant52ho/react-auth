// handles api request to register user
const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.post("/register", async (req, res) => {
    const { fullName, email, password, permission } = req.body;

    const alreadyExistsUser = await User.findOne({ where: { email } }).catch(
        (err) => {
            console.log("Error:", err);
        }
    );

    if (alreadyExistsUser) {
        return res.json({ message: "User with email already exists" });
    }

    const newUser = new User({ fullName, email, password, permission });
    const savedUser = await newUser.save().catch((err) => {
        console.log("Error:", err);
        res.json({ error: "Cannot register user at the moment!" });
    });

    if (savedUser) {
        res.json({
            message: "Thanks for registering",
        });
    }
});

module.exports = router;
