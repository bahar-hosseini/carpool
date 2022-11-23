//* declarations
require('dotenv').config();
const { ENVIROMENT, PORT } = process.env;
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

//* middleware setup
app.use(morgan(ENVIROMENT));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//* internal modules
const loginApiRoute = require('./routes/login_api');
const signUpApiRoute = require('./routes/signup_api');
const googleRoute = require('./routes/google_api');
require('./routes/auth');

app.use(cors());

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.get('/', (req, res) => {
  res.json({ greetings: 'hello world' });
});

//* ROUTS
app.use('/api/login', loginApiRoute);
app.use('/api/signup', signUpApiRoute);
app.use('/', googleRoute);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

module.exports = app;
