const db = require("../database/dbconfig.js");

module.exports = {
  get,
  getById,
  add,
  update,
  remove
};

function add(prisoner) {
  return db("prisoners").insert(prisoner);
}

function get(prison_id) {
  return db("prisoners")
    .select("*")
    .where("prison_id", prison_id);
}

function getById(id) {
  return db("prisoners").where({ id });
}

function update(changes, id) {
  return db("prisoners")
    .where({ id })
    .update(changes, id)
    .then(res => {
      return getById(id);
    });
}

async function remove(id) {
  const removed = await getById(id);
  return db("prisoners")
    .where({ id })
    .del()
    .then(result => {
      return { message: "Success", deleted: removed };
    });
}
