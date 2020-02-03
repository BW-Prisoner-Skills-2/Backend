exports.seed = function(knex) {
  return knex("prisoners").insert([
    { prison_id: 1, name: "Tony Darwalt", can_leave: true },
    { prison_id: 1, name: "Daryl Stewart", can_leave: false },
    { prison_id: 1, name: "Glen Pristin", can_leave: true },
    { prison_id: 2, name: "Jacob Black", can_leave: true },
    { prison_id: 2, name: "Peter Fargo", can_leave: true },
    { prison_id: 2, name: "Andre Weiner", can_leave: true },
    { prison_id: 3, name: "Todd Matthews", can_leave: false },
    { prison_id: 3, name: "Rick Gordon", can_leave: true },
    { prison_id: 3, name: "Jose Alvarado", can_leave: true },
    { prison_id: 4, name: "Mason Witticker", can_leave: true },
    { prison_id: 4, name: "Bob Price", can_leave: false },
    { prison_id: 4, name: "Calvin Smith", can_leave: true }
  ]);
};
