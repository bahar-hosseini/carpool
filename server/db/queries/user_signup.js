const db = require('../../configs/db.config');

//* post username, email, password, location

const addUser = (fullname, email, password) => {
  return db
    .query(
      `INSERT INTO users(name,email,password)
VALUES($1,$2,$3)
RETURNING *;`,
      [fullname, email, password]
    )
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { addUser };
