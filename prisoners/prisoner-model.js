const db = require("../database/dbconfig.js");

module.exports = {
  get,
  getById,
  add,
  update,
  remove,
  getSkillsByPrisonerId
};

function getSkillsByPrisonerId(id) {
  return db("prisoner_skills")
    .select("*")
    .where("prisoner_id", id);
}

function getExperienceByPrisonerId(id) {
  return db("prisoner_experience")
    .select("*")
    .where("prisoner_id", id);
}

function add(prisoner) {
  return db("prisoners").insert(prisoner);
}

function get(prison_id) {
  return db("prisoners")
    .where("prison_id", prison_id)
    .then(prisoners => {
      return Promise.all(
        prisoners.map(async prisoner => {
          let skills = await getSkillsByPrisonerId(prisoner.id);
          return { ...prisoner, skills: skills };
        })
      );
    });
}

function getById(id) {
  return db("prisoners")
    .where({ id })
    .first()
    .then(async prisoner => {
      let skills = await getSkillsByPrisonerId(prisoner.id);
      let experience = await getExperienceByPrisonerId(prisoner.id);
      return { ...prisoner, skills: skills, experience: experience };
    });
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
