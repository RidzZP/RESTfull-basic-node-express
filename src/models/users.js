const pool = require("../config/database");

const getAllUser = () => {
  const q = "SELECT * FROM users";
  return pool.execute(q);
};

const createUser = (body) => {
  const q = `INSERT INTO users (firstName, lastName) VALUES ('${body.firstName}', '${body.lastName}')`;
  return pool.execute(q);
};

const updateuser = (body, id) => {
  const q = `UPDATE users SET firstName = '${body.firstName}', lastName = '${body.lastName}' WHERE id = ${id}`;
  return pool.execute(q);
};

const deleteUser = (id) => {
  const q = `DELETE FROM users WHERE id = ${id}`;
  return pool.execute(q);
};

module.exports = {
  getAllUser,
  createUser,
  updateuser,
  deleteUser,
};
