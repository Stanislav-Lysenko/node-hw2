const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

const users = require('../../data/users.json');
const secret = require('../../config/auth.json').secret;

router.post('/login', (req, res) => {
    if(req.body) {
        let { email, password } = req.body;
        let [user] = users.filter(user => (user.email == email && user.password == password));

        if (!email || !password) {
            res.status(401).redirect('/error');

            return
        }

        if(!user){
            res.status(401).redirect('/notfound');
            return;
        }
        // let newSecret = new Buffer(secret, 'base64');
        let jwt_token = jwt.sign(user, secret);
        res.cookie('token', jwt_token)
    }
    res.redirect('/');

});

module.exports = router;

