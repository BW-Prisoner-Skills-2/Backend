exports.up = function(knex) {
  return knex.schema
    .createTable("admins", table => {
      table.increments();
      table
        .string("username", 25)
        .notNullable()
        .unique()
        .index();
      table.string("password", 80).notNullable();
    })
    .createTable("prisons", table => {
      table.increments();
      table
        .string("name", 80)
        .notNullable()
        .unique()
        .index();
      table
        .string("address", 80)
        .notNullable()
        .unique();
      table.integer("zipcode", 12).notNullable();
    })
    .createTable("prisoners", table => {
      table.increments();
      table
        .integer("prison_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("prisons")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .string("name", 50)
        .notNullable()
        .index();
      table.boolean("can_leave").notNullable();
    })
    .createTable("prisoner_skills", table => {
      table.increments();
      table
        .integer("prisoner_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("prisoners")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.string("description", 120).notNullable();
    })
    .createTable("prisoner_experience", table => {
      table.increments();
      table
        .integer("prisoner_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("prisoners")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.string("description", 250).notNullable();
      table.string("date", 40).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("prisoner_experience")
    .dropTableIfExists("prisoner_skills")
    .dropTableIfExists("prisoners")
    .dropTableIfExists("prisons")
    .dropTableIfExists("admins");
};
