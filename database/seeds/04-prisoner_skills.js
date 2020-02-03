exports.seed = function(knex) {
  return knex("prisoner_skills").insert([
    { prisoner_id: 1, description: "Lathe" },
    { prisoner_id: 1, description: "Welding" },
    { prisoner_id: 2, description: "Sewing" },
    { prisoner_id: 2, description: "Metallurgy" },
    { prisoner_id: 3, description: "Mill/Lathe" },
    { prisoner_id: 3, description: "Lathe Maintenance" },
    { prisoner_id: 4, description: "Painting" },
    { prisoner_id: 4, description: "Carpentry" },
    { prisoner_id: 5, description: "Lathe Maintenance" },
    { prisoner_id: 5, description: "Sculpting" },
    { prisoner_id: 6, description: "Car Repair" },
    { prisoner_id: 6, description: "Carpentry" },
    { prisoner_id: 7, description: "Car Repair" },
    { prisoner_id: 7, description: "Cooking" },
    { prisoner_id: 8, description: "Masonry" },
    { prisoner_id: 8, description: "Landscaping" },
    { prisoner_id: 9, description: "Demolition" },
    { prisoner_id: 9, description: "Farmwork" },
    { prisoner_id: 10, description: "Plumbing" },
    { prisoner_id: 10, description: "Carpentry" },
    { prisoner_id: 11, description: "Electrical" },
    { prisoner_id: 11, description: "Steamfitting" },
    { prisoner_id: 12, description: "Mechanic" },
    { prisoner_id: 12, description: "Construction" }
  ]);
};
