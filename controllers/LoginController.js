const Joi = require('joi');
const passportLogin = require('../helpers/passportLogin');

const login = (req, res, next) => {
    const schema = Joi.object().keys({
        email:Joi.string().required(),
        password:Joi.string().required()
    });
    const result = Joi.validate(req.body, schema);
    const valid = result.error == null;
    if (!valid) {
        throw {status: 422, message: result.error.details};
    }
    return passportLogin('login', req, res, next);
};

module.exports = login;