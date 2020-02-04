const db = require("../database/dbconfig.js");

module.exports = {
  get,
  add,
  update,
  remove
};

function getPrisonerCount(id) {
  return db("prisoners")
    .count("name as prisoners")
    .where("prison_id", id);
}

function getById(id) {
  return db("prisons")
    .select("*")
    .where({ id });
}

function get() {
  return db("prisons")
    .select("*")
    .then(prisonArray => {
      return Promise.all(
        prisonArray.map(async prison => {
          let count = await getPrisonerCount(prison.id);
          return { ...prison, population: count };
        })
      );
    });
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
    .then(res => {
      return { message: "Success", deleted: removed };
    });
}
