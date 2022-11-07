// declarations
require('dotenv').config();
const { ENVIROMENT, PORT } = process.env;
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// middleware setup
app.use(morgan(ENVIROMENT));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
/**
 * internal modules
 **/

const loginApiRoute = require('./routes/login_api');

app.get('/', (req, res) => {
  res.json({ greetings: 'hello world' });
});

// ROUTS
app.use('/api/login', loginApiRoute);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

module.exports = app;
