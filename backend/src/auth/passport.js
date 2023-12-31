// middleware
const passport = require("passport");
const passportJwt = require("passport-jwt");
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;
const User = require("../models/user");
const parse = require("./parseToken");

passport.use(
    new StrategyJwt(
        {
            // jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            jwtFromRequest: ExtractJwt.fromExtractors([
                (req) => {
                    const jsonCookie = parse.cookieToJson(req.headers.cookie);
                    return jsonCookie["_auth"];
                },
            ]),
            secretOrKey: process.env.JWT_SECRET,
        },
        function (jwtPayload, done) {
            return User.findOne({ where: { id: jwtPayload.id } })
                .then((user) => {
                    return done(null, user);
                })
                .catch((err) => {
                    return done(err);
                });
        }
    )
);
