exports.seed = function(knex) {
  return knex("prisons").insert([
    { name: "Clark County Prison", address: "4751 Park Way", zipcode: 97810 },
    {
      name: "Montly County Detention",
      address: "1867 NE Moe Drive",
      zipcode: 77891
    },
    {
      name: "Marilyn Foster Correctional",
      address: "8719 Gladly Road",
      zipcode: 22511
    },
    { name: "Pardelup Prison", address: "10810 Troika Lane", zipcode: 41908 }
  ]);
};
