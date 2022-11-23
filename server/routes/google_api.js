//*External Modules
const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    session: true,
  }),
  (req, res) => {
    res.redirect(`${http://localhost:3000}`);
  }
);

module.exports = router;
