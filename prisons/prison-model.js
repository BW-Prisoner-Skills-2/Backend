const db = require("../database/dbconfig.js");

module.exports = {
  get,
  add,
  update,
  remove
};

function getById(id) {
  return db("prisons")
    .select("*")
    .where({ id });
}

function get() {
  return db("prisons").select("*");
}

function add(prison_info) {
  return db("prisons").insert(prison_info);
}

function update(prison_info, id) {
  return db("prisons")
    .where({ id })
    .update(prison_info, id)
    .then(result => {
      return getById(id);
    });
}

async function remove(id) {
  const removed = await getById(id);

  return db("prisons")
    .where({ id })
    .del()
    .then(result => {
      return `Success, you deleted: ${removed}`;
    });
}
