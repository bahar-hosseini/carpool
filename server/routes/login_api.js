//External Modules
const express = require('express');
const router = express.Router();

//Internal Modules
const queryUser = require('../db/queries/user_login');
const generateToken = require('../utils/generate_token.js');

router.get('/', (req, res) => {
  // const { email, password } = req.body;
  const email = 'bahar.h@gmail.com';
  console.log('email', email);
  queryUser
    .getUser(email)
    .then((response) => {
      if (response) {
        res.json({
          response,
          token: generateToken(response.id),
        });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
