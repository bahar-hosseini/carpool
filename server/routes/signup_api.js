//*External Modules
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { application } = require('express');
const saltRound = 10;

//* Internal module
const userRegister = require('../db/queries/user_signup');

//*Google oauth.2
const GoogleStrategy = require('passport-google-oauth2').Strategy;

//* post request for registery
router.post('/', (req, res) => {
  const { fullname, email, password } = req.body;

  userRegister
    .addUser(fullname, email, password)

    .then((response) => {
      console.log(response, 'successfully sign up');
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
