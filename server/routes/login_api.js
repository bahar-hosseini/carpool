//External Modules
const express = require('express');
const router = express.Router();

//Internal Modules
const queryUser = require('../db/queries/user_login');
const generateToken = require('../utils/generate_token.js');

router.post('/', (req, res) => {
  // const { email, password } = req.body;
  const email = 'bahar2.h@gmail.com';
  console.log('email', email);
  queryUser
    .getUser(email)
    .then((response) => {
      if (response) {
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
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
