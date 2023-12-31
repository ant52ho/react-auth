const express = require("express");

const emojis = require("./emojis");
const registerApi = require("./register");
const loginApi = require("./login");
const paymentApi = require("./payment");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "API - 👋🌎🌍🌏",
    });
});

router.use("/emojis", emojis);
router.use(registerApi);
router.use(loginApi);
router.use(paymentApi);

module.exports = router;
