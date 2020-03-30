const jwt = require('jsonwebtoken');
const secret = require('../../config/auth').secret;

module.exports = (req, res, next) => {
    if (req.cookies.token) {
        // let newSecret = new Buffer(secret, 'base64');
        const jwt_token = req.cookies.token;
        let user = jwt.verify(jwt_token, secret);

        req.user = user;
        console.log(req.user);
    }

    next();
}