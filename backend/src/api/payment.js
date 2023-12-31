const express = require("express");
const passport = require("passport");

const router = express.Router();

router.get(
    "/payment",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        res.send("You have a total of $2400");
    }
);
// router.get(
//     "/payment",
//     passport.authenticate(
//         "jwt",
//         { session: false },
//         function (error, user, info) {
//             console.log(error);
//             console.log(user);
//             console.log(info);
//         }
//     ),
//     (req, res) => {
//         console.log(req.headers);
//         res.send("You have a total of $2400");
//     }
// );

module.exports = router;
