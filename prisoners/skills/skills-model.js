const db = require("../../database/dbconfig.js");

module.exports = {
  add,
  update,
  remove
};

function getById(id) {
  return db("prisoner_skills").where({ id });
}

function add(skill) {
  return db("prisoner_skills").insert(skill);
}

function update(changes, id) {
  return db("prisoner_skills")
    .where({ id })
    .update(changes, id)
    .then(res => {
      return getById(id);
    });
}

async function remove(id) {
  const removed = await getById(id);

  return db("prisoner_skills")
    .where({ id })
    .del()
    .then(result => {
      return { message: "Success", deleted: removed };
    });
}
