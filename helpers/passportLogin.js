const passport = require('passport');
const jwtTokens = require('../helpers/jwtTokens');


const passportLogin =  (strategy, req, res, next)=>{
    passport.authenticate(strategy, (err, user, info) => {
        try {
            if (err) {
                return next(err);
            }
            if (!user) {
                const error = new Error('There was no user');
                return next(error);
            }
            req.login(user, {session: false}, async (error) => {
                if (error) return next(error);

                //Sign the JWT token and populate the payload with the user email and id
                const token = jwtTokens.generateJWT(user.email, user.id);
                //Send back the token to the user
                return res.json({name: user.name, email: user.email, createdAt: user.createdAt, token: token});
            });
        } catch (error) {
            return next(error);
        }
    })(req, res, next);
};
module.exports = passportLogin;