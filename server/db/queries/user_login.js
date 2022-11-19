const db = require('../../configs/db.config');

//* Query to check just if the email exists
const getUserEmail = (email) => {
  return db
    .query(
      `SELECT * FROM users
   WHERE users.email ILIKE $1;`,
      [email]
    )
    .then((data) => {
      return data.rows[0];
    });
};

//* Query the information for a single user based on its ID
const getUser = (email, password) => {
  return db
    .query(
      `SELECT * FROM users
   WHERE users.email ILIKE $1 AND users.password LIKE $2;`,
      [email, password]
    )
    .then((data) => {
      return data.rows[0];
    });
};

module.exports = { getUser, getUserEmail };
