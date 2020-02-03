const bc = require("bcryptjs");

exports.seed = function(knex) {
  return knex("admins").insert([
    { username: "admin", password: bc.hashSync("admin", 8) }
  ]);
};
