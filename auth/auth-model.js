const db = require("../database/dbconfig.js");

module.exports = {
  getBy,
  add
};

function getBy(filter) {
  return db("admins").where(filter);
}

function add(credentials) {
  return db("admins").insert(credentials);
}
