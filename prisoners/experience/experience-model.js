const db = require("../../database/dbconfig.js");

module.exports = {
  add,
  update,
  remove
};

function getById(id) {
  return db("prisoner_experience").where({ id });
}

function add(experience) {
  return db("prisoner_experience").insert(experience);
}

function update(changes, id) {
  return db("prisoner_experience")
    .where({ id })
    .update(changes, id)
    .then(res => {
      return getById(id);
    });
}

async function remove(id) {
  const removed = await getById(id);

  return db("prisoner_experience")
    .where({ id })
    .del()
    .then(result => {
      return { message: "Success", deleted: removed };
    });
}
