exports.up = function(knex) {
  return knex.schema
    .createTable("admins", table => {
      table.increments();
      table
        .string("username", 25)
        .notNullable()
        .unique()
        .index();
      table
        .string("password", 25)
        .notNullable()
        .notNullable();
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
      table.integer("prisoner_quantity", 10);
    });
};

exports.down = function(knex) {};
