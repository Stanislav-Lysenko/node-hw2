const express = require('express');
const router = express.Router();

router.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
})

module.exports = router;