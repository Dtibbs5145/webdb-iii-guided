
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
      table.increments('name').notNullable()
      table.integer('role_id')
      .unsigned() //unsigned means always a positive number
      .references('id')
      .inTable('roles')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
