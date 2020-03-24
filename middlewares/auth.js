const  passport = require('passport');
const bcrypt = require("bcrypt");
const LocalStrategy = require('passport-local').Strategy;
const db = require("../models");

const JWTStrategy = require('passport-jwt').Strategy;
//We use this to extract the JWT sent by the user
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use('signup', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback: true

}, async (req, email, password, done) => {
    try {
        const hash = bcrypt.hashSync(password, 10);

        //Save the information provided by the user to the the database
        const user = await db.user.create({
            email:email,
            name:req.body.name,
            password:hash });
        //Send the user information to the next middleware
        return done(null, user);
    } catch (error) {
        done(error);
    }
}));