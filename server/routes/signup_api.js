//*External Modules
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { application } = require('express');
const saltRounds = 10;
const passport = require('passport');

//* Internal module
const userRegister = require('../db/queries/user_signup');
const queryUser = require('../db/queries/user_login');

//* post request for registery
router.post('/', (req, res) => {
  const { fullname, email, password } = req.body;
  queryUser.getUserEmail(email).then((response) => {
    if (!response) {
      bcrypt.hash(password, saltRounds, function (err, hash) {
        userRegister
          .addUser(fullname, email, hash)

          .then((response) => {
            console.log(response, 'successfully sign up');
          })
          .catch((err) => {
            res.status(500).json({ error: err.message });
          });
      });
    } else {
      console.log('err');
    }
  });
});

module.exports = router;
