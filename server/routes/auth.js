require('dotenv').config();
const addUser = require('../db/queries/user_signup');
const queryUser = require('../db/queries/user_login');

//*Google oauth.2
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:8081/auth/google/callback',
      passReqToCallback: true,
    },
    async (request, accessToken, refreshToken, profile, done) => {
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //   return done(err, user);
      // });
      const account = profile._json;
      const { sub, name, email } = account;

      // console.log('sub', sub);
      // console.log('name', name);
      // console.log('email', email);

      try {
        await queryUser.getUserEmail(email).then((response) => {
          if (!response) {
            addUser.googleUser(sub, name, email).then((res) => {
              const user = res;
              done(null, user);
            });
          } else {
            console.log(response, "you've already signed up");
            const user = response;
            done(null, user);
          }
        });
      } catch (err) {
        done(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
