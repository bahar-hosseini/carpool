//*External Modules
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRound = 10;

//*Internal Modules
const queryUser = require('../db/queries/user_login');
const generateToken = require('../utils/generate_token.js');

//*  Post request for Login page

router.post('/', (req, res) => {
  const { email, password } = req.body;
  queryUser.getUserEmail(email).then((response) => {
    if (response) {
      bcrypt.compare(password, response.password, function (err, result) {
        if (result) {
          console.log('successfully logged-in');
          res.json({
            userId: response.id.toString(),
            email: response.email,
            token: generateToken(response.id),
          });
        } else {
          const error = new Error('Your username and/or password is incorrect');
          error.statuscode = 422;
          throw error;
        }
      });
    }
  });
});

module.exports = router;
