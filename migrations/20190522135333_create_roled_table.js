// add a new migration for new changes
exports.up = function(knex, Promise) {
  return knex.schema.createTable('roles', table => {
      table.increments();
      table.string('name', 256).notNullable().unique() // second argument is optional
      table.timestamps(true, true); // optional table
  })
};


// undoes what is done above and will run when rollback is done
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('roles')
};
